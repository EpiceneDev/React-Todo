import React from 'react'
import TodoList from './components/TodoComponents/TodoList.js'
import TodoForm from './components/TodoComponents/TodoForm.js'
import './App.scss'

const data = [
  {
    task: '',
    id: '',
    completed: false
  },
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
    
    this.state = {
      list: data,
    };
  }


  filterCompletedItems = () => {
    this.setState({
      list: this.state.list.filter(item => !item.completed)
    })
    localStorage.setItem('list', JSON.stringify([...this.state.list, this.state.list]))  
    
  }

  toggleCompleted = (id) => {
    console.log("toggleCompleted", id)
    this.setState({ 
      list: this.state.list.map(item => {
        if (id === item.id) {
          this.setState();
          return {...item, completed: !item.completed};
        }else{
          return item;
        }
      })
    })
  }
    
  addItem = item => {
    this.setState({
      list: [...this.state.list, {
        task: item,
        id: Date.now(),
        completed: false
      }]
    })
   localStorage.setItem('list', JSON.stringify([...this.state.list, this.state.list]))  
  }


  render() {
    console.log("this.state: ", this.state)
    return (
      <div className="app">
        <h2>“Obstacles are those frightful things you see when you take your eyes off your goal.” -Henry Ford</h2>
        <hr/>
        <TodoList list={this.state.list}
                toggleCompleted={this.toggleCompleted} 
        />
        <TodoForm addItem={this.addItem}
                filterCompletedItems={this.filterCompletedItems} 
        />
      </div>
    );
  }
}

export default App;