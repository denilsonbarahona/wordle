import React, {useContext} from "react";
import {Context} from "../../context/Context";

type props = {
    children: React.ReactElement,
    twClass: string
}

/**
 * el parametro children puede ser un string o puede ser un objeto (las imagenes de enter y delete)
 *      cuando children es un objeto se hace un dispatch con el tipo que se recibe como props del componente
 *      el payload cuando children es un objeto es por defecto el carácter de una línea nueva ya que la acción en el reducer de delete no recibe un payload. 
 * 
 * cuando children es un carácter se hace un dispatch a la acción guess enviando como payload el carácter
 */
function Key({children , twClass}: props){
    const {dispatch} = useContext(Context);

    let handleOnClick;
    if(typeof children === 'object'){
        const {props:{type}} = children; 
        handleOnClick = ()=>dispatch({type, payload: "\n"})
    }else {
        handleOnClick = ()=>dispatch({type: "guess", payload: children})
    }

    return (
        <button onClick={handleOnClick} className={twClass}>{children}</button>
    )
}

export default Key;