import React, { useState } from "react";
import '../componet/ManagingState.css'


const ManagingState = () =>{
      
    const [value, setValue] = useState(0);

    const handelerPlus = ()=>{
        console.log('Clicked + ');
        let sum =  10 + value;
        setValue(sum);
    }

    const handelerMinus =()=>{
        console.log('Clicked -');
        let sum = value - 10;
        setValue(sum);
    }
return(

    <div className="Body">
        <h1 className="Heading">{value}</h1>
        <button onClick={handelerPlus} className="btn">+</button>
        <button  onClick={handelerMinus} className="btn" disabled={value===0 ? true :false}>-</button>
    </div>
)

}

export default ManagingState;

