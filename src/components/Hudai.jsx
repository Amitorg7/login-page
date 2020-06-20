import React, { Fragment } from "react";
import { fauth } from "../config/firebaseConfig";

const Hudai =(props)=>{

    const handleSubmit=()=>{
        try{
            fauth.signOut().then(()=>{
                localStorage.setItem("loginInfo",false);
                props.history.push('/');
            }).catch();
        }catch (e){
        console.log(e.message);
    }
}

    return(
        <Fragment>
            <h1>hello world</h1>
        <button onClick={handleSubmit}>logout</button>
        </Fragment>
    )
}
export default Hudai;