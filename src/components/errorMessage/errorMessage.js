import React from "react";
import img from './error.jpg';


const Errormessage = () => {
    return (
        <>
            <img src={img}></img>
            <span>Something goes wrong</span>
        </>
    )
}
export default Errormessage;