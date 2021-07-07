import React from 'react';
import './Todo.css';

class Todo extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
        <div onClick={() => this.props.toggleCompleted(this.props.item.id)}
            className={this.props.item.completed ? "completed" : ""}>{this.props.item.task}</div>
        )
    }   
}

export default Todo;