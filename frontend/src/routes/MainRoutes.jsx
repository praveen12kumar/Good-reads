import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import {Routes, Route} from "react-router-dom";

export default function MainRoutes(){

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}