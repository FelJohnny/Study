import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Slide.module.css"

const Slide = ({slides})=>{

    
    const [position, setPosition]=useState(0)
    const SlidePosition = useRef()

    function slidePrev(){
        const {width} = SlidePosition.current.getBoundingClientRect()
        console.log(width)
        setPosition(position + width)
    }
    function slideNext(){
        const {width} = SlidePosition.current.getBoundingClientRect()
        setPosition(position - width)
    }



    return(
        <section className={styles.container}>
            <div ref={SlidePosition} className={styles.content} style={{transform:`translateX(${position}px)`}}>
                {slides.map((slide) =>(
                <div className={styles.item} key={slide.id}>{slide.text}</div>
                ))}
            </div>
            <nav className={styles.nav}>
                <button onClick={slidePrev} >Anterior</button>
                <button onClick={slideNext}>Proximo</button>
            </nav>
        </section>
    )
}

export default Slide 