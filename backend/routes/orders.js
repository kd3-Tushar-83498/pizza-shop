const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')

router.get('/', async(request, response) => {
    try {

        const statement = `
            SELECT 
                id, totalAmount,createdTimestamp
                FROM orderMaster
                WHERE 
                    userId = ?
        `

        const [orders] = await db.execute(statement, [request.data.id])
        response.send(utils.createSuccess(orders))


    } catch (ex) {
        response.send(utils.createError(ex))
    }
})

router.get('/details/:id', async(request, response) => {
    
    try {

        const statement = `
            SELECT 
                pizza.name, pizza.details, pizza.price, pizzaId, quantity, totalAmount, 
                orderDetails.createdTimestamp
                from orderDetails, pizza
                WHERE 
                orderId = ? AND pizza.id = orderDetails.pizzaId
        `

        const [details] = await db.execute(statement, [request.data.id])
        response.send(utils.createSuccess(details))


    } catch (ex) {
        response.send(utils.createError(ex))
    }
})

router.post('/', async(request, response) => {
    const {items, totalAmount} = request.body



    try {

        const statementOrder = `insert into orderMaster (userId, totalAmount)
                                values
                                (?, ?)
        `
            // Step 1 : create an order
            const order = await db.execute(statementOrder, [request.data.id, totalAmount])
            console.log(order);


            //step 2: find new orderId
            const orderId = order[0].insertId

            //step 3: insert the order details
            for(const item of items){
                const statementOrderDetails = `
                insert into orderDetails 
                (orderId, pizzaId, quantity, totalAmount )
                values
                (?,?,?,?)`

                await db.execute(statementOrderDetails, [orderId, item.pizzaId, item.quantity, item.totalAmount])
            }

            response.send(utils.createSuccess('done'))


        
    } catch (error) {
        response.send(utils.createError(error))
    }

    //create an order


})


module.exports = router