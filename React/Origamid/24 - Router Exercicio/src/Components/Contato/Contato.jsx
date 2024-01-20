import React from "react";
import ContatoCss from "./Contato.module.css"
import fotoContato from '../../img/contato.jpg'
import Head from "../Head/Head";

const Contato = ()=>{
    return(
        <section className={ContatoCss.container + ' animationLeft'}>

            <Head titulo="Loja | Contato " description="Entre em contato"/>
            <img src={fotoContato} alt="imagemContato"/>
            <div>
                <h2>Entre em contato</h2>
                <ul className={ContatoCss.dados}>
                    <li>felipijohnny@outlook.com</li>
                    <li>11 95117-0016</li>
                    <li>Rua do Limoeiro</li>
                </ul>
            </div>
        </section>
    )
}

export default Contato