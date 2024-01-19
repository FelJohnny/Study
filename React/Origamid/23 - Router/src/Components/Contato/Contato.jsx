import React from "react";
import { NavLink, useParams, Routes, Route, BrowserRouter } from "react-router-dom";
import Johnny from "../Pessoas/Johnny";
import Rafael from "../Pessoas/Rafael";





const Contato = ()=>{
    const params = useParams();
    return(
        <section className='animationleft'>
                <h1>Contato</h1>
                <nav>
                    <NavLink to='johnny'>Johnny</NavLink>{' '}
                    <NavLink to='rafael'>Rafael</NavLink>{' '}
                </nav>
                <Routes>
                    <Route path="johnny" element={<Johnny/>}/>
                    <Route path="rafael" element={<Rafael/>}/>
                </Routes>
        </section>
    )
}

export default Contato