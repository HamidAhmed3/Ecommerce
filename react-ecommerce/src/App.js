import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>
  }
]);


function App() {
  return (
  //  <Routes>
  //   <Route path="/" element={<Home />}></Route>
  //   <Route path="/home" element={<Home />}></Route>
  //   <Route path="/login" element={<LoginPage />}></Route>
  //   <Route path="/signup" element={<SignupPage />}></Route>
  //  </Routes>
  // <Home></Home>
  <RouterProvider router={router} />
  );
}

export default App;
