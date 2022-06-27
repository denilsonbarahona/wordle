import { useContext } from "react";
import Modal from "../../atoms/modal";
import Button from "../../atoms/button"
import {Context} from "../../context/Context";


function Chart(){
    /**
     * se obtiene desde el contexto de la app la información que esta en el store, el tiempo que esta corriedo antes de hacer el cambio
     * a una nueva palabra y la función con la que se detendra el interval del tiempo
     */
    const {
           store:{plays, winCounter, guess, fail, win}, 
           dispatch, 
           time,
           stopInterval
        } = useContext(Context);

    /**
     * handle para cerrar el modal de gráficos
     */
    const handleOnClick=()=>{
        const modal = document.querySelector("#chart") as HTMLDialogElement;
        modal.close()
        /**
         * si al cerrar el modal, el usuario obtuvo una victoria o derrota se limpia el tablero y se detiene el interval del tiempo
         */
        if(win || fail) {
            dispatch({type: "clean"})
            stopInterval()
        }
    }

    return <Modal id="chart">
            <h2 className="dark:text-white Roboto text-3xl text-center text-black font-bold">Estadísticas</h2>
            <div className="grid grid-cols-2 mt-10 gap-36 Roboto mb-11 ">
                <div className="text-center dark:text-white">
                    <p>{plays}</p>
                    <p>Jugadas</p>
                </div>
                <div className="text-center dark:text-white">
                    <p>{winCounter}</p>
                    <p>Victorias</p>
                </div>
            </div>
            {
                (fail || win) && <p className="text-center dark:text-white Roboto">La palabra era: <span className="font-bold uppercase">{guess}</span></p>
            }
            
            <p className="mt-3 text-center dark:text-white Roboto">SIGUIENTE PALABRA</p>
            <p className="mt-1 text-center dark:text-white Roboto font-bold">{time}</p>
            <Button onClick={handleOnClick} twClass='bg-primary rounded mt-6 w-full text-white font-bold text-2xl'>Aceptar</Button>
        </Modal> 
}

export default Chart;