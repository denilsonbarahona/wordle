import React from "react";
import Key from "../../atoms/key";

type props = {
    keys: Array<React.ReactNode>
    twClass: string
};

function RowKeys({keys, twClass}:props){
    return (
        <div className={twClass}>
            {
                keys.map((item, index)=>(
                    <Key key={index} 
                        twClass="Roboto rounded-md truncate text-keyboardKey 
                        dark:text-boardKey grid place-items-center font-semibold
                        h-12 text-sm bg-keyboardKey dark:bg-keyDark p-1">
                        {item as React.ReactElement}
                    </Key>
                ))
            }
        </div>
    )
}

export default RowKeys;