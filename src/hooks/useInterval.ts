import {useState} from "react";

/**
 * custom hook que va a manejar el tiempo que se va a tener para adivinar una palabra
 */
/*
  invalidId es la variable donde se va a guardar el id del intervalo que calcula el tiempo que ha pasado.
*/
let intervalId:any;
const useIntervalTime=()=>{
    /**
     * step son los segundos que van pasando desde sé que inicia el interval
     */
    let step = 0;
    const [time, setTime] = useState('');
    
    /**
     * 
     * @param second cantidad de segundo que va a durar le interval
     * step es la variable que lleva el contador de segundo que pasaron desde que se inicio el interval
     * current los segundos actuales del intervalo.
     */
    const handleProgress =(second:number)=>{
        step = step +1;
        let current = (second - step)/60;
        let minutes = Number(current).toFixed(2)
        /**
         * para mostrar el tiempo que falta para agotar el interval convertiremos los minutos a string
         */
        setTime(String(minutes).replace(".",":"));
        if(current <= 0) {
            stopInterval();
        }
    }

    /**
     * cuando el contador llega a 0 o el usuario cambia de palabra se limpia el interval actual
     */
    const stopInterval=()=>{
        clearInterval(intervalId)
    }
    /**
     * en 5 minutos hay 300 segundos
     *  la función handleProgress se estara ejecutando cada 1000 milisegundo (equivalente a 1 segundo)
     */
    const startInterval =()=>{
      intervalId = setInterval(handleProgress, 1000, 300)
    }

    return {
        time,
        startInterval,
        stopInterval
    }
}

export default useIntervalTime;