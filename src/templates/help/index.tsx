import Modal from "../../atoms/modal";
import Square from "../../atoms/square"
import Button from "../../atoms/button"

function Help(){
    /**
     * función para cerrar el modal
     */
    const handleOnClick=()=>{
        const modal = document.querySelector("#help") as HTMLDialogElement;
        modal?.close()
    }

    return <Modal id="help">
        <h2 className="dark:text-white Roboto text-3xl text-center text-black font-bold">Cómo jugar</h2>
        <div className="mt-11 dark:text-white text-black grid gap-4 Roboto text-base">
            <p>Adivina la palabra oculta en cinco intentos.</p>
            <p>Cada intento debe ser una palabra válida de 5 letras.</p>
            <p>
              Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.
            </p>
        </div>
        <p className="mt-6 dark:text-white Roboto font-bold">Ejemplo</p>
        <div className="grid grid-cols-5 place-items-center gap-2 p-4">
            <Square twClass="Roboto rounded-md grid place-items-center bg-primary text-boardKey text-3xl font-extrabold w-full aspect-square">G</Square>
            <Square twClass="Roboto rounded-md grid place-items-center bg-boardEmpty text-boardKey text-3xl font-extrabold w-full aspect-square">A</Square>
            <Square twClass="Roboto rounded-md grid place-items-center bg-boardEmpty text-boardKey text-3xl font-extrabold w-full aspect-square">T</Square>
            <Square twClass="Roboto rounded-md grid place-items-center bg-boardEmpty text-boardKey text-3xl font-extrabold w-full aspect-square">O</Square>
            <Square twClass="Roboto rounded-md grid place-items-center bg-boardEmpty text-boardKey text-3xl font-extrabold w-full aspect-square">S</Square>
        </div>
        <p className="mt-5 dark:text-white text-black grid gap-4 Roboto text-base">La letra G está en la palabra y en la posición correcta.</p>
        <div className="grid grid-cols-5 place-items-center gap-2 p-4">
            <Square twClass="Roboto rounded-md grid place-items-center bg-boardEmpty text-boardKey text-3xl font-extrabold w-full aspect-square">V</Square>
            <Square twClass="Roboto rounded-md grid place-items-center bg-boardEmpty text-boardKey text-3xl font-extrabold w-full aspect-square">O</Square>
            <Square twClass="Roboto rounded-md grid place-items-center bg-secondary text-boardKey text-3xl font-extrabold w-full aspect-square">C</Square>
            <Square twClass="Roboto rounded-md grid place-items-center bg-boardEmpty text-boardKey text-3xl font-extrabold w-full aspect-square">A</Square>
            <Square twClass="Roboto rounded-md grid place-items-center bg-boardEmpty text-boardKey text-3xl font-extrabold w-full aspect-square">L</Square>
        </div>
        <p className="mt-5 dark:text-white text-black grid gap-4 Roboto text-base">La letra C está en la palabra pero en la posición incorrecta.</p>
        <div className="grid grid-cols-5 place-items-center gap-2 p-4">
            <Square twClass="Roboto rounded-md grid place-items-center bg-boardEmpty text-boardKey text-3xl font-extrabold w-full aspect-square">C</Square>
            <Square twClass="Roboto rounded-md grid place-items-center bg-boardEmpty text-boardKey text-3xl font-extrabold w-full aspect-square">A</Square>
            <Square twClass="Roboto rounded-md grid place-items-center bg-boardEmpty text-boardKey text-3xl font-extrabold w-full aspect-square">N</Square>
            <Square twClass="Roboto rounded-md grid place-items-center bg-boardEmpty text-boardKey text-3xl font-extrabold w-full aspect-square">T</Square>
            <Square twClass="Roboto rounded-md grid place-items-center bg-tertiary text-boardKey text-3xl font-extrabold w-full aspect-square">O</Square>
        </div>
        <p className="mt-5 dark:text-white text-black grid gap-4 Roboto text-base">La letra O no está en la palabra.</p>
        <p className="mt-5 dark:text-white text-black grid gap-4 Roboto text-base">Puede haber letras repetidas. Las pistas son independientes para cada letra.</p>
        <p className="mt-5 dark:text-white text-black grid gap-4 Roboto text-base text-center" >¡Una palabra nueva cada 5 minutos!</p>
        <Button onClick={handleOnClick} twClass='bg-primary mt-6 w-full rounded text-white font-bold text-2xl'>JUGAR!</Button>
    </Modal>
}

export default Help;