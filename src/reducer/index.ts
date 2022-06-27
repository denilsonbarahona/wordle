import {stateType, actionType} from "./initialState";
import {checkMyGuess, checkWins} from "./helper";

/**
 * las acciones enter y guess realizan la misma lógica.
 */
const reducer = (state: stateType, action: actionType)=>{
    switch (action.type) {
        case 'enter':
        case 'guess': {
            /** función que va a verificar el nivel de acierto de la letra ingresada */
            const {indexOfGuess, ...rest} = checkMyGuess(
                    Array.from(state.guess.toUpperCase()), 
                    action.payload, [...state.tries]
                );
            /**
             * myGuess es la palabra que esta formado el usuario a partir de las letras seleccionadas
             */
            const myGuess = (indexOfGuess === 0)?action.payload:state.myGuess+action.payload;

            return {
                ...state, 
                myGuess,
                tries: [...state.tries, rest],
            };
        };
        case 'checkWin': {
            /**
             * función que va a verificar si hay victoria o derrota por cada letras que ingresa el usuario
             */
            const {win, fail, winCounter, plays} = checkWins(
                state.myGuess, 
                state.guess, 
                state.tries, 
                state.winCounter, 
                state.plays
            );
            return {
                ...state, 
                win,
                fail,
                winCounter,
                plays,
            };
        };
        case 'delete': {
            /**
             * cuando el usuario hace click en el boton delete se hace pop en el array de tries y se elimina la ultima letra
             * dentro del la palabra que esta formado
             */
            let tries = [...state.tries];
            let myGuess = Array.from(state.myGuess);
            tries.pop();
            myGuess.pop();
            return {
                ...state,
                myGuess: myGuess.join(''),
                tries: [...tries]
            }
        }
        case 'setWord': return {
            ...state,
            guess: action.payload
        };
        case 'clean': return {
            ...state,
            tries: [],
            myGuess: "",
            win: false,
            fail: false
        }
        default: return state;
    }
}

export default reducer