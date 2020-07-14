import React, { Component } from 'react';

import './style/header.css';

class Header extends Component {

    createNewTask = e => {
        const trimTitle = e.currentTarget.value;

        if (e.key === 'Enter' && trimTitle.trim()) {
            const newTask = {
                    id: Date.now().toString(), 
                    title: trimTitle,
                    done: false
            };
            this.props.onCreate(newTask);

            e.currentTarget.value = '';
        }
    }

    handleClick = () => {
        const { allTasks, itemsDone, allDone, allUndone } = this.props;

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

export default Header;
