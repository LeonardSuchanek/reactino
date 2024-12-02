import React from "react";

function Option({ item, provided }) {
    return (
        <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}

            className="border-black border-2 bg-yellow-200 hover:bg-yellow-400 text-xl p-2 drop-shadow"
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
