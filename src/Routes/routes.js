import { Route, Routes } from "react-router-dom";
import Home from '../Pages/Home/index';
import Sobre from "../Pages/Sobre";


export default function RoutesApp(){

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre-nos" element={<Sobre/>}/>        
        </Routes>
    )
}