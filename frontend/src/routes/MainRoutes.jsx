import {Routes, Route} from "react-router-dom";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";

export default function MainRoutes(){

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}