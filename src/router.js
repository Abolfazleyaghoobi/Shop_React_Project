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
    }

]

export default routs;