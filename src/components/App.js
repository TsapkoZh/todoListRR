import React, { Component } from 'react'
import ToDoList from './TodoList';
import './style/todoTitle.css'
// import { ToDoList } from './TodoList.js'


class App extends Component {
    render() {
        return (
            <div>
                <h1 className='todoTitle'>todos</h1>
                <ToDoList />
            </div>

        );
    }
}

export default App