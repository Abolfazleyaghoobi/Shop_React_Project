import ForgotPassPage from "./components/Form signup&Login/Forgot Passwor/ForgotPage";

import Login from "./components/Form signup&Login/login/Login";
import Signup from "./components/Form signup&Login/signup/Signup";
import Home from "./page/home/Home";
import AllProducts from "./page/Product/productLIst/Products";

const routs = [
// && home route 
  {
    path: "/",
    element: <Home />,
  },
//   && login route
  {
    path: "/login",
    element: <Login />,
  },
//   && signup route
  {
    path: "/signup",
    element: <Signup />,
  },
//   && forgotPassword route
  {
    path: "/Forgotpassword",
    element: <ForgotPassPage />,
  },
//   && All Product route
  {
    path: "/productsList",
    element: <AllProducts />,
  },
];

export default routs;
