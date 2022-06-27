import { useState, useReducer } from "react";
import {initialState} from "../reducer/initialState";
import reducer from "../reducer";
import useIntervalTime from '../hooks/useInterval';

function useInitialState(){
    
    const {time, startInterval, stopInterval} = useIntervalTime();
    const [Theme, setTheme] = useState("light");
    const [store, dispatch] = useReducer(reducer, initialState);
    return {
        Theme,
        setTheme,
        store,
        dispatch,
        time,
        startInterval,
        stopInterval
    }
}

export default useInitialState;