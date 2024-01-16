import React from "react"
import styles from './Produtos.module.css'

const Produtos = ()=>{
    console.log(styles)

    return(
        <div>
            <h1 className={styles.titulo}>Produto</h1>
            <p className={styles.preco}>preço</p>
            <button className={styles.btn}>Comprar</button>
      </div>
    )
}

export default Produtos