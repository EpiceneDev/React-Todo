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
    }

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
                <button type="submit">Delete Completed Tasks</button>
            </form>
        )
    }
}

export default TodoForm;
