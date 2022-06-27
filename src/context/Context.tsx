/**
 * contexto al que toda la aplicación accederá a los datos o funciones compartidas
 */

import React from 'react';
import useInitialState from './useInitialState';

type props={
  children: React.ReactNode,
}

type contextProps = {
    Theme: string,
    setTheme: Function,
    store: any,
    dispatch: Function,
    time: string,
    startInterval: Function,
    stopInterval: Function,
};

export const Context = React.createContext<contextProps>({} as contextProps);

function ContextProvider({children}:props){
    return (
        <Context.Provider value={useInitialState()}>{children}</Context.Provider>
    )
}

export default ContextProvider;