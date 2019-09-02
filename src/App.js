import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';

const data = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    // let date = Date.now;
    this.state = {
      list: data,
    }
  }

  render() {
    console.log("this.state: ", this.state)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.list} />
      </div>
    );
  }
}

export default App;
