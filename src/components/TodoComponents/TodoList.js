// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from "./Todo.js"

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        console.log('todolist props: ', props)
    }

    render() {
        console.log('todolist2: ', this.props)
        return (
        <div>{this.props.list.map(item=> <Todo key={item.id} item={item} />)}</div>
        )
    }
}

export default TodoList;