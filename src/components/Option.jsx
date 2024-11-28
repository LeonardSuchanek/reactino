import React from "react";

function Option({ item, provided }) {
    return (
        <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}

            className="bg-yellow-200 p-4 
            relative before:absolute before:w-6 before:h-6 before:rounded-full before:bg-yellow-200 
            before:top-[-12px] before:left-[50%] before:transform before:translate-x-[-50%] 
            after:absolute after:w-6 after:h-6 after:rounded-full after:bg-cyan-200 
            after:bottom-[-12px] after:left-[50%] after:transform after:translate-x-[-50%]"
            style={{
                userSelect: "none",
                ...provided.draggableProps.style,
            }}
        >
            {item.content}
        </div >
    );
}

export default Option;
