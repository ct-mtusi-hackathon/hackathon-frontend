import React from 'react'
import cl from "./Modal.module.scss"

const Modal = (props)=> {
    const classes = [cl.modal]
    if(props.vals[0])
        classes.push(cl.active);
  return (
    <div className={classes.join(" ")} 
        onClick={o=>props.vals[1](false)}
        >
            <div className={cl.modalBoxContent}
                    onClick={x=>x.stopPropagation()}>
                <div className={`${props.className}`}>
                        {props.children}
                </div>
            </div>
    </div>
  )
}

export default Modal;
