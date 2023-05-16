import React from "react";
import "./Switch.scss";

const Switch = (props)=>{
    return (
        <div className={["Switch", props.className].join(" ")}>
            <input 
                type="checkbox" 
                id="switch" 
                checked={props.value} 
                onChange={e=>props.setValue?props.setValue(e.target.checked):undefined}/>
            <label 
                for="switch">Toggle
                </label>
        </div>
        )
}

export default Switch;