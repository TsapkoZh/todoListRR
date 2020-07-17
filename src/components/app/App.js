import React, { Component } from 'react';
import ToDoList from '../todoList/TodoList';

import './todoTitle.scss';

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

export default App;