// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Item from "./Todo";

const ToDoList = props => {
    return (
        <div className="todo-list">
            {props.toDoArray.map(item => (
                <Item handleToggleItem={props.handleToggleItem} key={item.id} item={item} />
            ))}
        </div>
    )
};

export default ToDoList;