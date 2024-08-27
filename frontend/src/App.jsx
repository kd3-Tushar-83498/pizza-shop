import { Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className='container-fluid'>

      <Routes>
        <Route index element = {<Signin></Signin>}></Route>
        <Route path='/' element = {<Signin></Signin>}></Route>
        <Route path='/signup' element = {<Signup></Signup>}></Route>
        <Route path = '/orders' element = {<Orders></Orders>}></Route>
        <Route path = '/home' element = {<Home></Home>}></Route>
        <Route path='/cart' element = {<Cart></Cart>}></Route>
        
      </Routes>

      <ToastContainer/>
      
    </div>
  );
}

export default App;
