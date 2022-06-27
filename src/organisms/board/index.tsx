import {useContext} from "react";
import Square from "../../atoms/square";
import {Context} from "../../context/Context";

type props = {
    size: number,
    twClass: string
}

function Board({ twClass, size}: props){
    /** 
     * Cada color representa el éxito al adivinar la letra de cada palabra: 
        -	0: la casilla esta vacía. 
        -	1: la letra existe en la palabra y existe en la misma posición
        -	2: la letra existe en la palabra, pero no en la misma posición 
        -	3: la letra no existe en la palabra. 
     */
    const color = ['boardEmpty', 'primary', 'secondary', 'tertiary']
    /**
     * obtenemos los intentos realizados y los agregamos dentro del array que se terminara renderizando en el cliente
     */
    const {store:{tries}} = useContext(Context);
    const items = new Array(size).fill('').map((_, index)=>{
        /**
         * key es el caracter que se renderiza.
         * level es el valor de éxito de 0 - 3 que puede tener cada carácter. (estos valores se explican arriba)
         */
        return tries[index] ?? {key: '', level:0}
    });
    
    return (
        <section className={twClass}>
            { items.map((item, index)=>(
                    <Square key={index} 
                        twClass={`Roboto rounded-md grid place-items-center 
                        bg-${color[item.level]} text-boardKey text-3xl 
                        font-extrabold w-full aspect-square`}>
                        {item.key}
                    </Square>
                )) }
        </section>
    );
};

export default Board;