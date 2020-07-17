import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './todo.scss';

class Todo extends Component {

	state = {
		value: '',
		isEdit: false,
	}

	handleDelete = () => {
		const { id, onDelete } = this.props;

		onDelete(id);
	}

	handleUpdate = () => {
		const { id, onUpdate } = this.props;

		onUpdate(id);
	}

	handleChange = event => {
		const trimTitle = event.currentTarget.value;

		if (trimTitle.trim()) {
			this.setState({value: trimTitle});
		}
	}

	handleDblClick = () => {
		this.setState({ 
			isEdit: true,
			value: this.props.title,
		});
		window.addEventListener('keydown', this.handleKeyUp);
	}

	handelCancel = () => {
		this.setState({ isEdit: false });
		window.removeEventListener('keydown', this.handleKeyUp);
	}

	handleSave = () => {
		const { id, onSaveEdit } = this.props;
		const { value } = this.state;

		onSaveEdit(id, value);
		this.handelCancel();
	}

	handleKeyUp = e => {
		if (e.key === 'Escape') {
			this.handelCancel();
		}
		if (e.key === 'Enter') {
			this.handleSave();
		}
	}

	render() {
		const { isEdit, value } = this.state;
		const { done, title } = this.props;

		return (
			<div className={done ? 'todo done' : 'todo'}>
				<div 
					className={done ? 'toggleDone' : 'toggleNotDone'}
					onClick={this.handleUpdate} 
				/>

				<div className='text'>
					{isEdit ? (                 
						<input 
							type='text'
							value={value} 
							onChange={this.handleChange}
							onBlur={this.handleSave}
							autoFocus={true}
							className='editTodo'
						/>
						) : (
						<p 
							className={done ? 'text done' : 'text'}
							onDoubleClick={this.handleDblClick}
						>
								{title}
						</p>
						)
					}
				</div>

				<div className='wrapperBtnDelete'>
					<button 
						type="button"
						onClick={this.handleDelete}
						className="delete"
					>
						&times;
					</button>
				</div>
			</div>
		);
	}
}

Todo.propTypes = {
	id: PropTypes.string, 
	title: PropTypes.string,
	done: PropTypes.bool,
	onUpdate: PropTypes.func,
	onDelete: PropTypes.func,
	onSaveEdit: PropTypes.func,
}

export default Todo;
