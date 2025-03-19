import Login from "./components/Form signup&Login/login/Login";
import Home from "./page/home/Home";

const routs=[
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/login",
        element:<Login/>
    }

]

export default routs;