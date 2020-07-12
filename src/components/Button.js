import React, { Component } from "react";

class Button extends Component {

    handleClick = () => {
        const { onClick, cbData } = this.props
        onClick(cbData)
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

export default Button;
