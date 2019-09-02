// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from "./Todo.js"

const TodoList = () => {
    return (
        <div className="todo-list">
            <Todo />
        </div>
        // <div>{this.state.message}</div>;
        )
}

export default TodoList;