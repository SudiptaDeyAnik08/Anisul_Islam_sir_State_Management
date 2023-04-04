import React, { useState } from "react";
// import HomePage from "./HomePage.js";
import HomePage from './HomePage.js';
import LoginPage from "./LoginPage.js";

const ConditionalRendering1 = ()=>{

    const [see, setSee] = useState(false)
    let element;
   if( see === true){
    element  =  <HomePage></HomePage>
    }else{
        element = <LoginPage></LoginPage>
    }


    return(
        <div>
            <h1>Hi</h1>
            {element}
        </div>
    )
}

export default ConditionalRendering1;