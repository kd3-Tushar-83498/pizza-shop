import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import { signinUser } from '../services/user'
//import Loader from '../components/loader'


export function Signin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const onSignin = async() => {

        
        if(email.length == 0){
            toast.warn('enter email')
        }
        else if(password.length == 0){
            toast.warn('enter password')
        }
        
      
        else {

            //make api call
            const result = await signinUser( email, password)
            if(result.status == 'success' ){

                //cache the token
                const token = result.data.token

                sessionStorage.token = token

            
                toast.success('Welcome to the pizza shop!!!')
                navigate('/home')
            }
            else{
                toast.error(result.error)
            }
        }
    }
    return(

        
        <div >

            <h1 className="title">Signin</h1>

            <div className="row">
                <div className="col"></div>
                <div className="col">
                <div className="form">
                <div className="mb-3">
                    <label htmlFor="">Email</label>
                    <input type="email"
                    placeholder="abc@test.com"
                    className="form-control"
                    onChange={ (e) => setEmail(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="">Password</label>
                    <input type="password"
                    placeholder="**********"
                    className="form-control" 
                    onChange={ (e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <div>Don't have an account? <Link to= '/signup'>Signup here</Link></div>
                    <button className="btn btn-primary"
                    onClick={onSignin}
                    >Signin</button>
                </div>
            </div>
                </div>
                <div className="col"></div>
            </div>
            
        </div>
    )
}

export default Signin