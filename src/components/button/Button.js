import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
	handleClick = () => {
		const { onClick, cbData } = this.props;
		onClick(cbData);
	}

	render() {
		const { className, children } = this.props;

		return (
			<button 
				className={className}
				onClick={this.handleClick}
			>
				{children}
			</button>
		)
	}
}

Button.propTypes = {
	cbData: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.string,
	onClick: PropTypes.func,
}

export default Button;
