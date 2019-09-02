// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from "./Todo.js"

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
        <div className="todo-list">
            <Todo />
        </div>
        // <div>{this.state.message}</div>;
        )
    }
}

export default TodoList;