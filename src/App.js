import { useRoutes } from "react-router-dom";
import "./App.css";

import routs from "./router";
function App() {
   let router=useRoutes(routs)
   return router
}

export default App;
