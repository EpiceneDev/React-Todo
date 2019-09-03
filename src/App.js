import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js'

const data = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: true
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

  filterCompletedItems = () => {
    this.setState({
      list: this.state.list.filter(item => {
        return !item.completed;
      })
    })
  }

  toggleCompleted = (id) => {
    console.log("toggleCompleted", id)
    this.setState({ 
      list: this.state.list.map(item => {
        if (id === item.id) {
          return {...item, completed: !item.completed};
        }else{
          return item;
        }
      })
    })
  }

    
  addItem = task => {
    this.setState({
      list: [...this.state.list, {
        task: task,
        id: Date.now(),
        completed: false
      }]
    })
  }


  render() {
    console.log("this.state: ", this.state)
    return (
      <div>
        <h2>Welcome to Sheila's Todo App!</h2>
        <TodoList list={this.state.list}
                toggleCompleted={this.toggleCompleted} 
        />
        <TodoForm addItem={this.addItem}
                filterItems={this.filterCompletedItems} />
      </div>
    );
  }
}

export default App;