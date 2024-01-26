import { Route, Routes } from "react-router-dom";
import Home from '../Pages/Home/index';
import Sobre from "../Pages/Sobre";
import Patrocidadores from "../Pages/Patrocinadores";


export default function RoutesApp(){

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre-nos" element={<Sobre/>}/>  
            <Route path="/patrocinadores" element={<Patrocidadores/>}/>      
        </Routes>
    )
}