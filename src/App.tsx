import { useContext, useEffect } from "react";
import Header from "./organisms/header";
import Board from "./organisms/board";
import KeyBoard from "./organisms/keyboard";
import Loading from "./atoms/loading";
import {Context} from "./context/Context";
import useWord from "./hooks/useWord";


function App() {
  /**
   * variables y funciones que estan en el context
   */
  const {
         Theme, 
         store:{win, fail, myGuess, guess}, 
         dispatch, 
         time , 
         startInterval 
        } = useContext(Context);

  const {loading, selectWord} = useWord();

  /**
   * siempre que el usuario selecciona una letra y existe una palabra 
   * para adivinar se verifica si hay una victoria o derrota del usuario
   */
  useEffect(()=>{
    if(guess !==""){
      dispatch({type: "checkWin"});
    }
  },[ myGuess ])

  /**
   * al tener un reset por parte del usuario, se va a seleccionar una nueva palabra para adivinar y 
   * se va a iniciar el intervalo de tiempo. 
   */
  useEffect(()=>{
    if(!win && !fail) {
      selectWord(); 
      startInterval();
    }
  },[win, fail])

  /**
   * cuando el tiempo se acaba se va a limpiar el tablero del juego y se va seleccionar una nueva palabra para adivinar.
   */
  useEffect(()=>{
    if(time ==="0:00") {
      dispatch({type: "clean"})
      startInterval();
      selectWord();
    }
  }, [time])

  /**
   * cuando el usuario tenga una victoria o una derrota se va a mostrar el modal del grafico para mostrar resultados.
   */
  if(win || fail) {
    const modal = document.querySelector('#chart') as HTMLDialogElement;
    if(!modal.open)
      modal?.showModal()
  }

  return (
    <div className={Theme}>
      {loading && <Loading />}  
      <main className="grid grid-cols-1 h-auto place-items-center p-1 bg-backLight dark:bg-backDark">
        <section className="sm:w-80 md:w-100  m-0 mx-auto py-4">
          <Header twClass="flex rounded-2xl h-16 bg-headerGray dark:bg-headerDark justify-between items-center px-5 mb-16" />
          <Board twClass="grid grid-cols-5 grid-rows-5 place-items-center gap-2 mb-16 p-10" size={25} />
          <KeyBoard twClass="flex flex-col rounded-2xl w-full h-auto px-3 py-6 bg-keyboard dark:bg-keyboardDark justify-center gap-2" />
        </section>
      </main>
    </div>
  );
}

export default App;
