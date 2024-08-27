const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const utils = require('./utils')
const jwt = require('jsonwebtoken')
const config = require('./config')





//create new react app
const app = express()
app.use(cors())
app.use(morgan('combined'))
app.use(express.json())
app.use(express.urlencoded({ extended : true}))
app.use(express.static('images'))

//configure protected routes
app.use((request, response, next)=> {

    const skipUrls = ['/user/signup', '/user/signin']
    if(skipUrls.findIndex(item => item == request.url) != -1){
        next()
    }else{
        const token = request.headers.token;

        if(!token){
            response.send(utils.createError('missing token'))
        }
        else{
            try{
                const payload = jwt.verify(token, config.secret )
                request.data = payload
                next()
            }catch(ex){
                response.send(utils.createError('invalid token'))
            }
        }
    }
})


//add the routes
const userRouter = require('./routes/users')
const pizzaRouter = require('./routes/pizza')
const orderRouter = require('./routes/orders')



app.use('/user', userRouter)
app.use('/pizza', pizzaRouter)
app.use('/order', orderRouter)


app.listen(4001, '0.0.0.0' , () => {
    console.log('Server started on port 4001');
})