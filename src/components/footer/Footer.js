import React, { Component }  from 'react';
import PropTypes from 'prop-types';

import Button from '../button/Button';

import './footer.scss'

const filtersList = [
	'all',
	'active',
	'completed',
];

class Footer extends Component {
	render () {
		const { 
				filter,
				clearCompleted,
				allTodos,
				itemsLeft,
				onFilterChanged,
		} = this.props;
	
		return (
			<div className={allTodos > 0 ? 'show footer' : 'footer'} >
				<span className='todoCount'>{itemsLeft} items left</span>

				<div className='filterBtns'>
						{filtersList.map(filterItem => (
							<Button 
									key={filterItem}
									className={filter === filterItem  ? 'filterSwitchBtn selected' : 'filterSwitchBtn'} 
									cbData={filterItem} 
									onClick={onFilterChanged}
							>
									{filterItem}
							</Button>
						))}
				</div>

				<button 
					onClick={clearCompleted}
					className='clearCompleted'
				>
					clear completed
				</button>
		</div>
		)
	}
}

Footer.propTypes = {
	allTodos: PropTypes.number.isRequired,
	itemsLeft: PropTypes.number.isRequired,
	filter: PropTypes.string.isRequired,
	onFilterChanged: PropTypes.func,
	clearCompleted: PropTypes.func,
	filterItem: PropTypes.number,
}

export default Footer;