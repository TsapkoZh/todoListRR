import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './header.scss';

class Header extends Component {
	createNewTodo = e => {
		const trimTitle = e.currentTarget.value;

		if (e.key === 'Enter' && trimTitle.trim()) {
			const newTask = {
							id: Date.now().toString(), 
							title: trimTitle,
							done: false,
			};
			this.props.onCreate(newTask);

			e.currentTarget.value = '';
		}
	}

	handleClick = () => {
		const { allTodos, itemsDone, allDone, allUndone } = this.props;

		if (allTodos === itemsDone) {
			allUndone();
		} else { 
			allDone();
		}
	}

	render() {
		const { allTodos } = this.props;

		return (
			<div className={'header'}>
				<div className='wrapper'>
					<button 
						onClick={this.handleClick}
						className={allTodos > 0 ? 'showAllDoneBtn allDoneBtn' : 'allDoneBtn '}
					>
						∟   
					</button>
				</div>

				<input 
					onKeyPress={this.createNewTodo} 
					placeholder='What needs to be done?'
					className='newTask'
				/>
			</div>
		);
	}
}

Header.propTypes = {
	createNewTodo: PropTypes.func,
	allTodos: PropTypes.number,
	itemsDone: PropTypes.number,
	allDone: PropTypes.func,
	allUndone: PropTypes.func,
}

export default Header;
