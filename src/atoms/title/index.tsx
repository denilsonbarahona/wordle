import React from "react";

type props = {
    children: React.ReactNode,
    twClass: string,
};

function Title({children, twClass}:props){
    return  <h1 className={twClass}>{children}</h1>
}

export default Title;