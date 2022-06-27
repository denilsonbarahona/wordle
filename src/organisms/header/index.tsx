import {useContext} from "react";
import Button from "../../atoms/button";
import Title from "../../atoms/title";
import ActionContainer from "../../molecules/actions";
import Help from "../../templates/help";
import Chart from "../../templates/chart";
import {Context} from "../../context/Context";

type props = {
  twClass: string
}

function Header({twClass}: props){
    const {setTheme, Theme} = useContext(Context);

    /**
     * función que maneja el cambio del tema
     */
    const handleThemeOnClick=()=>{
      if(Theme==="dark") setTheme("light")
      else setTheme("dark")
    }

    /**
     * función que maneja mostrar el modal de ayuda o el de gráfico.
     */
    const handleShowModal=(param:string)=>{
      const modal = document.querySelector(`#${param}`) as HTMLDialogElement;
      if(!modal.open)
        modal?.showModal()
    }

    return (
        <header className={twClass}>
          <Help />
          <Chart />
          
          <Button onClick={()=>handleShowModal('help')} twClass="">
           <div className="block bg-questionLight dark:bg-questionDark w-5 md:w-6 aspect-square bg-no-repeat bg-cover"/>
          </Button>
          <Title twClass="Roboto font-semibold md:font-bold text-xl md:text-2xl dark:text-titleDark">
            WORDLE
          </Title>
          <ActionContainer>
            <Button onClick={()=>handleShowModal('chart')} twClass="">
              <div className="block bg-chartLight dark:bg-chartDark w-5 md:w-6 aspect-square bg-no-repeat bg-cover"/>
            </Button>
            <Button onClick={handleThemeOnClick} twClass="relative">
              <div className="w-10 h-5 md:w-11 md:h-6 bg-skyLight dark:bg-skyDark rounded-2xl bg-cover bg-no-repeat" />
              <div className="w-5 h-5 md:w-5.5  md:h-5.5 bg-sun dark:bg-moon bg-cover absolute top-0 md:mt-0.5 right-0 dark:left-0 bg-no-repeat" />
            </Button>
          </ActionContainer>
        </header>
    );
}

export default Header;