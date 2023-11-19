import React from "react";

const Home = (props) =>{
    return(
        <>
            <h1 style={{color: props.color}} >Home</h1>
            <p style={{fontWeight: props.fontWeight}}>Essa é a home do site</p>
        </>
    )
}
export default Home