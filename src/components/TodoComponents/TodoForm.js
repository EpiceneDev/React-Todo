import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newitem: ""
        };
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addItem(this.state.newitem);
        this.setState({ newitem: ""});
    }
    
//   findItem = event => {
//     this.state.list === [event.target.name]: event.target.value 
//   }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                    name="newitem" 
                    placeholder="...add a new task"
                    value={this.state.newitem} 
                    onChange={this.handleChange}
                />
                <button type="submit" 
                    onChange={this.handleSubmit}>Add Task</button>
                <button onClick={this.props.filterCompletedItems}>Clear Completed</button>
                <input type="text"
                    name="search"
                    placeholder="Looking for....?"
                    value={this.state.id}
                />
                <button type="submit"
                    onChange={this.findItem}>Find</button>
            </form>
        )
    }
}

export default TodoForm;
