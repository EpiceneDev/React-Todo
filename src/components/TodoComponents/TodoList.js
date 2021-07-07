// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from "./Todo.js"

class TodoList extends React.Component {
    // constructor(props) {
    //     super(props);
    //     console.log('todolist props: ', this.props.list)
    // }


    render() {
        console.log('todolist2: ', this.props.list)
        return (
        <div className='note'>
        {this.props.list.map(item=> <Todo key={item.id}  
                            item={item}
                            toggleCompleted={this.props.toggleCompleted} 
                        />)}
        </div>
        )
    }
}

export default TodoList;