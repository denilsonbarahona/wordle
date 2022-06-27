import React from 'react';

type props = {
    children: React.ReactNode, 
    twClass: string,
}
function Square({children, twClass}: props){
    return  <p className={twClass}>{children}</p>
}

export default Square;