import {useState, useContext} from "react";
import getWords from "../API";
import {Context} from "../context/Context";

/**
 * custom hook que obtiene una lista de palabras desde el API y selecciona una palabra para que inicie el juego
 */
const useWord=()=>{
    const {dispatch} = useContext(Context);
    const [loading, setLoading] = useState(true);
    
    /**
     * función que selecciona un numero random dentro de los limites del array de palabras
     */
    const getRandomNumber=(max:number)=>{
        return Math.floor(Math.random() * max);
    }
    
    const getRandomWord=(data:Array<string>)=>{
        const word = getRandomNumber(data.length)
        return word;
    }
    /**
     * función que selecciona una palabra dentro del array de palabras
     */
    const selectWord=async()=>{
        const data = await getWords();
        const word = data[getRandomWord(data)];
        dispatch({type: "setWord", payload: word})
        setLoading(false);
    }

    return {
        loading,
        selectWord
    }
}

export default useWord;