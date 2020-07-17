import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Footer from '../footer/Footer';
import Header from '../header/Header';
import TodoListItems from '../todoListItems/TodoListItems';

import { 
	createTask,
	updateTask, 
	deleteTask, 
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
			tasks,
			filter,
			allTasks,
			createNewTask,
			allDone,
			allUndone,
			updateTask, 
			deleteTask,
			itemsLeft,
			itemsDone,
			changeFilter, 
			clearCompleted,
			saveEdit,
		} = this.props;

		console.log(tasks, 'tasks')

	return (
		<div className='todoList'>
			<Header 
				onCreate={createNewTask} 
				allDone={allDone}
				allUndone={allUndone}
				allTasks={allTasks}
				itemsLeft={itemsLeft}
				itemsDone={itemsDone}
			/>
			<TodoListItems 
				tasks={tasks} 
				onUpdate={updateTask}
				onDelete={deleteTask}
				onSaveEdit={saveEdit}
			/>

			<Footer 
				filter={filter} 
				allTasks={allTasks}
				itemsLeft={itemsLeft}
				onFilterChanged={changeFilter} 
				clearCompleted={clearCompleted}
			/>
				</div>
		);
	}
}

const filterTask = state => {
	const { filter, tasks } = state;

	switch(filter) {
		case 'active':
			return tasks.filter(t => !t.done);

		case 'completed': 
			return tasks.filter(t => t.done);

		default: return tasks
	}
}

const mapStateToProps = state => ({
	tasks: filterTask(state),
	filter: state.filter,
	itemsLeft: state.tasks.filter(t => !t.done).length,
	itemsDone: state.tasks.filter(t => t.done).length,
	allTasks: state.tasks.length,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    createNewTask: createTask,
    updateTask,
    deleteTask,
    changeFilter,
    clearCompleted,
    saveEdit,
    allDone,
    allUndone,
	}, dispatch);
	
ToDoList.propTypes = {
	createNewTask: PropTypes.func,
	tasks: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		done: PropTypes.bool,
	})),
	allTasks: PropTypes.number.isRequired,
	itemsDone: PropTypes.number.isRequired,
	itemsLeft: PropTypes.number.isRequired,
	filter: PropTypes.string.isRequired,
	allDone: PropTypes.func,
	allUndone: PropTypes.func,
	updateTask: PropTypes.func,
	deleteTask: PropTypes.func,
	saveEdit: PropTypes.func,
	changeFilter: PropTypes.func,
	clearCompleted: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
