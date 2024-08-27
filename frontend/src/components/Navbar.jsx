import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"

export function Navbar(){

    const navigate = useNavigate()

    //get a selector
    const cart = useSelector(state => state.cart)
    console.log(`inside navbar => `, cart)


    function onLogout(){
        sessionStorage.removeItem('token');

        navigate('/')


    }
    return(

        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary" 
        data-bs-theme="dark">
            <div className="container-fluid">
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to = '/home'className="nav-link" aria-current="page" >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to='/cart' className="nav-link" aria-current="page" >
                                Cart
                            </Link>
                        </li>
                        <li>
                            <Link to='/orders' className="nav-link" aria-current="page" >
                                Orders
                            </Link>
                        </li>
                        <li>
                            <button  
                            onClick={onLogout}
                            className="nav-link" aria-current="page" >
                                Logout
                            </button>
                        </li>
                       
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar