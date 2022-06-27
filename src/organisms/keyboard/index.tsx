import RowKeys from "../../molecules/row_keys";
import {FiDelete, FiCornerDownLeft as FiEnter} from "react-icons/fi"

type KeyBoardType = {
    twClass: string
}

/**
 * el componente RowKeys acepta en el props key un caracter o un objeto que el el que se rendizara en el teclado virtual.
 */
function KeyBoard({twClass}: KeyBoardType){
    return (
        <section className={twClass} >
           <RowKeys
                twClass="grid grid-cols-10 gap-1 px-4"
                keys={['Q','W','E','R','T','Y','U','I','O','P']} />
            <RowKeys
                twClass="grid grid-cols-10 gap-1 pl-6"
                keys={['A','S','D','F','G','H','J','K','L','Ñ']} />
            <RowKeys
                twClass="grid grid-cols-10 gap-1 pl-2"
                keys={[<FiEnter className="text-keyboardKey dark:text-boardKey" type="enter"/>,'Z','X','C','V','B','N','M',
                       <FiDelete className="text-keyboardKey dark:text-boardKey" type='delete'/>]} />
        </section>
    )
}

export default KeyBoard;