import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

function AppRoutes() {
    return ( 
        <Routes>
            <Route element={<Home/>} path="/"/>
        </Routes>
     );
}

export default AppRoutes;