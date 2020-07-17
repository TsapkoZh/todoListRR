import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './header.scss';

class Header extends Component {
	createNewTask = e => {
		const trimTitle = e.currentTarget.value;

		if (e.key === 'Enter' && trimTitle.trim()) {
			const newTask = {
							id: Date.now().toString(), 
							title: trimTitle,
							done: false,
			};
			this.props.onCreate(newTask);
		console.log(newTask, 'newTask')


			e.currentTarget.value = '';
		}
	}

	handleClick = () => {
		const { allTasks, itemsDone, allDone, allUndone } = this.props;

		console.log(allTasks, 'allTasks')
		console.log(itemsDone, 'itemsDone')
		console.log(allDone, 'allDone')
		console.log(allUndone, 'allUndone')

		if (allTasks === itemsDone) {
			allUndone();
		} else { 
			allDone();
		}
	}

	render() {
		const { allTasks } = this.props;

		return (
			<div className={'header'}>
				<div className='wrapper'>
					<button 
						onClick={this.handleClick}
						className={allTasks > 0 ? 'showAllDoneBtn allDoneBtn' : 'allDoneBtn '}
					>
						∟   
					</button>
				</div>

				<input 
					onKeyPress={this.createNewTask} 
					placeholder='What needs to be done?'
					className='newTask'
				/>
			</div>
		);
	}
}

Header.propTypes = {
	createNewTask: PropTypes.func,
	allTasks: PropTypes.number,
	itemsDone: PropTypes.number,
	allDone: PropTypes.func,
	allUndone: PropTypes.func,
}

export default Header;
