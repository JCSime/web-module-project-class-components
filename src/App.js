import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './style.css';

const toDoArray = [
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
];

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            toDoArray: toDoArray
        };
    }
    handleClearCompleted = ()=> {
        this.setState({
            ...this.state,
            toDoArray: this.state.toDoArray.filter(item => {
                return !item.handleClearCompleted;
            })
        });
    }
    handleAddItem = (itemName)=> {
        const newItem = {
            task: itemName,
            id: Date.now(),
            completed: false
        };
        this.setState({
            ...this.state,
            toDoArray: [...this.state.toDoArray, newItem]
        });
    }
    handleToggleItem = (selectedItem) => {
        this.setState({
            ...this.state,
            toDoArray: this.state.toDoArray.map(item => {
                if(item.id === selectedItem.id) {
                    return({
                        ...item,
                        completed: !item.completed
                    })
                } else {
                    return item;
                }
            })
        });
    }

    render() {
        return (
            <div className='App'>
                <div className='header'>
                  <h2>Welcome to your Todo App!</h2>
                    <TodoForm handleAddItem={this.handleAddItem}/>
                </div>
                <TodoList handleToggleItem={this.handleToggleItem} toDoArray={this.state.toDoArray} />
                <button onClick={this.handleClearCompleted} className='clear-btn'>Clear Completed</button>
            </div>
        );
    }
}

export default App;
