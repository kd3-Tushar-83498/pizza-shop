import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { signupUser } from "../services/user";



export function Signup() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    //get the navigation function
    const navigate = useNavigate()

    const onSignup = async() => {

        if(firstName.length == 0){
            toast.error('enter first name')
        }
        else if(lastName.length == 0){
            toast.error('enter last name')
        }
        else if(email.length == 0){
            toast.error('enter email')
        }
        else if(password.length == 0){
            toast.error('enter password')
        }
        else if(confirmPassword.length == 0){
            toast.error('please confirm password')
        }
        else if(password != confirmPassword){
            toast.error('passwords does not match')
        }
        else {

            //make api call
            const result = await signupUser(firstName, lastName, email, password)
            if(result.status == 'success' ){
            
                toast.success('successfully registered the user')
                navigate('/')
            }
            else{
                toast.error(result.error)
            }
        }
    }
    return(
        <div >

            <h1 className="title">Signup</h1>

            <div className="row">
                <div className="col"></div>
                <div className="col">
                <div className="form">
                <div className="mb-3">

                <label htmlFor="">First Name </label>
                    <input type="text"
                    placeholder="John"
                    className="form-control" 
                    onChange={ (e) => setFirstName(e.target.value)}
                    />

                <label htmlFor="">Last Name</label>
                    <input type="text"
                    placeholder="Doe"
                    className="form-control" 
                    onChange={ (e) => setLastName(e.target.value)}/>


                    <label htmlFor="">Email</label>
                    <input type="email"
                    placeholder="abc@test.com"
                    className="form-control" 
                    onChange={ (e) => setEmail(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="">Password</label>
                    <input type="password"
                    placeholder="**********"
                    className="form-control" 
                    onChange={ (e) => setPassword(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password"
                    placeholder="**********"
                    className="form-control"
                    onChange={ (e) => setConfirmPassword(e.target.value)} />
                </div>

                <div className="mb-3">
                    <div>Already got an account? <Link to= '/'>Signin here</Link></div>
                    <button onClick={onSignup} className="btn btn-primary" >Sign up</button>
                </div>
            </div>
                </div>
                <div className="col"></div>
            </div>
            
        </div>
    )
}

export default Signup