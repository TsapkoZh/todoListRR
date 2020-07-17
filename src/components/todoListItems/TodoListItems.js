import React, { Component } from 'react';
import Todo from '../todo/Todo';
import PropTypes from 'prop-types';

class TodoListItems extends Component {
	render() {
		const { 
			onUpdate, 
			onDelete, 
			onSaveEdit, 
		} = this.props;
		
		return (
			<div className='todos'>
				{
					this.props.tasks.map(({id, title, done}) => (
						<Todo
							key={id}
							id={id}
							title={title}
							done={done} 
							onUpdate={onUpdate}
							onDelete={onDelete} 
							onSaveEdit={onSaveEdit}
					/>
					))
				}
			</div>
		);
	}
}

TodoListItems.propTypes = {
	id: PropTypes.string, 
	title: PropTypes.string,
	done: PropTypes.bool,
	onUpdate: PropTypes.func,
	onDelete: PropTypes.func,
	onSaveEdit: PropTypes.func,
}

export default TodoListItems;