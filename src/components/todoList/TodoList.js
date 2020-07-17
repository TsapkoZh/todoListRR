import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Footer from '../footer/Footer';
import Header from '../header/Header';
import TodoListItems from '../todoListItems/TodoListItems';

import { 
	createTodo,
	updateTodo, 
	deleteTodo, 
	clearCompleted,
	saveEdit,
	allDone,
	allUndone,
} from '../../redux/todo/actions';
import { changeFilter } from '../../redux/filter/actions';

import './todoList.scss';

class ToDoList extends Component {
	render() {
		const { 
			todos,
			filter,
			allTodos,
			createNewTodo,
			allDone,
			allUndone,
			updateTodo, 
			deleteTodo,
			itemsLeft,
			itemsDone,
			changeFilter, 
			clearCompleted,
			saveEdit,
		} = this.props;

		console.log(todos, 'todos')

	return (
		<div className='todoList'>
			<Header 
				onCreate={createNewTodo} 
				allDone={allDone}
				allUndone={allUndone}
				allTodos={allTodos}
				itemsLeft={itemsLeft}
				itemsDone={itemsDone}
			/>
			<TodoListItems 
				todos={todos} 
				onUpdate={updateTodo}
				onDelete={deleteTodo}
				onSaveEdit={saveEdit}
			/>

			<Footer 
				filter={filter} 
				allTodos={allTodos}
				itemsLeft={itemsLeft}
				onFilterChanged={changeFilter} 
				clearCompleted={clearCompleted}
			/>
				</div>
		);
	}
}

const filterTask = state => {
	const { filter, todos } = state;

	switch(filter) {
		case 'active':
			return todos.filter(t => !t.done);

		case 'completed': 
			return todos.filter(t => t.done);

		default: return todos
	}
}

const mapStateToProps = state => ({
	todos: filterTask(state),
	filter: state.filter,
	itemsLeft: state.todos.filter(t => !t.done).length,
	itemsDone: state.todos.filter(t => t.done).length,
	allTodos: state.todos.length,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    createNewTodo: createTodo,
    updateTodo,
    deleteTodo,
    changeFilter,
    clearCompleted,
    saveEdit,
    allDone,
    allUndone,
	}, dispatch);
	
ToDoList.propTypes = {
	createNewTodo: PropTypes.func,
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		done: PropTypes.bool,
	})),
	allTodos: PropTypes.number.isRequired,
	itemsDone: PropTypes.number.isRequired,
	itemsLeft: PropTypes.number.isRequired,
	filter: PropTypes.string.isRequired,
	allDone: PropTypes.func,
	allUndone: PropTypes.func,
	updateTodo: PropTypes.func,
	deleteTodo: PropTypes.func,
	saveEdit: PropTypes.func,
	changeFilter: PropTypes.func,
	clearCompleted: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
