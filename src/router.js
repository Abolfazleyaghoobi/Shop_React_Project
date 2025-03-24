import ForgotPassPage from "./components/Form signup&Login/Forgot Passwor/ForgotPage";

import Login from "./components/Form signup&Login/login/Login";
import Signup from "./components/Form signup&Login/signup/Signup";
import Home from "./page/home/Home";

const routs=[
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/signup",
        element:<Signup/>
    },
 
    {
        path:"/Forgotpassword",
        element:<ForgotPassPage/>
    }

]

export default routs;