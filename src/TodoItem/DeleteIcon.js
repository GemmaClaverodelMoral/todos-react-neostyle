import React from "react";
import { TodoIconsLib } from "./TodoIconsLib";

function DeleteIcon({ color, onRemove }){
    return (
        <TodoIconsLib
            type="delete"
            color={`${color}`}
            onClick={onRemove}
        />
    );
}

export { DeleteIcon };