import React, {useContext} from "react";
import reactDom from "react-dom"
import {Context} from "../../context/Context";

type props = {
    children: React.ReactNode
    id: string,
}

/**
 * los modales donde se muestran los gráficos y las instrucciones del juego se muestran en un modal haciendo uso de los portals de react.
 *  el context únicamente nos traerá que tema se le va a mostrar al usuario.
 */

function Modal({id, children}: props){
    const {Theme} = useContext(Context);
    return reactDom.createPortal(
        <div className={Theme}>
            <dialog id={id} 
                    className="max-w-lg p-6 backdrop:bg-popDropLight 
                    dark:backdrop:bg-popDropDark border-popBorderLight 
                    dark:border-popBorderDark border-2 rounded bg-modalLight 
                    dark:bg-modalDark">
                {children}
            </dialog>
        </div>,
         document.querySelector("#modal") as HTMLDialogElement
    );
}

export default Modal;