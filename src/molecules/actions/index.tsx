import React from "react";

type props = {
    children: React.ReactNode
};

function ActionContainer({children}:props){
    return (
        <div className="flex gap-1">
            {children}
        </div>
    );
}

export default ActionContainer;