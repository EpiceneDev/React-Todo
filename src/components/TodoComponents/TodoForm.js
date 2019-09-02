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

    render() {
        return (
            <form>
                <input type="text" 
                    name="newitem" 
                    placeholder="...add a new task"
                    value={this.state.newitem} 
                    onChange={this.handleChange}
                />
                <button type="submit" >Add Task</button>
                <button type="submit">Delete Completed Tasks</button>
            </form>
        )
    }
}

export default TodoForm;
