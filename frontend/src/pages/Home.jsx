import { useEffect, useState } from "react";
import Navbar  from "../components/Navbar";
import axios from "axios";
import { createSuccess } from '../services/utils';
import { toast } from "react-toastify";
import { getAllPizzas } from "../services/pizza";
import config from "../config";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";




function Pizza({ item}){

    //get the dispatch object
    const dispatch = useDispatch()

    const getTitle = () => {
        return item.name.length > 12 ? item.name.substring(0, 11) + '...'  : item.name
    }

    const addItemToCart = () => {

        dispatch(addItem(item))

    }



    return <div className='card mb-3 mt-3' style={{height: 280}}>
    
        <div style={{textAlign : 'center'}}>
            <img style={{width : 150}} className='card-img-top' src={config.server + '/' + item.image} alt="" />
        </div>
        
        <div className='card-body'>
            <div style={{fontWeight : 'bold', fontSize : 19}}>{getTitle()}</div>
            <div >
                Price : { ' '}
                <span style={{fontWeight : 'bold', fontSize : 17}}>
                    ₹{item.price}
                </span>

            </div>

            <div className="mt-2">
                <button onClick = {addItemToCart}  className="btn btn-success btn-sm">Add</button>
            </div>
        </div>
       
       <div>
            
       </div>
    </div>
}

export function Home() {

    
    const [items, setItems] = useState([])

    const loadAddPizzas = async() => {
        const result = await getAllPizzas()



        if(result.status == 'success'){

            console.log(result)
            setItems(result.data)
        }else{
            toast.error(result.error)
        }
    }

    useEffect(()=> {
        loadAddPizzas()
    } , [])

    return(
        <div  >
            <Navbar />
            <div className="container ">
                <h1 className="title">Home</h1>


                <div className="row">
                {items.map((item) => {
                    return(
                        <div className="col" 
                        key={item.id}
                        >
                            <Pizza 

                            item = {item}
                            />
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Home