import React from "react";

type props = {
    children: React.ReactNode,
    twClass: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>)=> void
}

function Button({onClick, children, twClass}: props){
    return (
        <button onClick={onClick} className={twClass}>
            {children}
        </button>
    )
}

export default Button;
