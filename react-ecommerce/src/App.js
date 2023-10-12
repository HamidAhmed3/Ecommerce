import { Counter } from './features/counter/Counter';
import './App.css';
import Shop from './pages/Home';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
// import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Protected from './features/auth/components/protected';
import Home from './pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectLoggedInUser } from './features/auth/authSlice';
import {fetchItemsByUserIdAsync} from '../src/features/cart/cartSlice'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected>
             <Home></Home>
             </Protected>
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>
  },
  {
    path: "/cart",
    element: <Protected>
              <CartPage></CartPage>
              </Protected>
  },
  {
    path: "/product-detail/:id",
    element: <Protected><ProductDetailPage></ProductDetailPage>
              </Protected>
  }
]);


function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(()=> {
    if(user){
    dispatch(fetchItemsByUserIdAsync(user.id))}
    },[dispatch, user])

  return (
  <RouterProvider router={router} />
  );
}

export default App;
