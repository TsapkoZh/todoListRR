import React, { Component } from 'react';

import './style/header.css';

class Header extends Component {

    state = {
        isDone: false,
    }

    componentDidMount() {
        this.isDoneEdit();
    }

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

    handleClickDone = () => {
        this.props.allDone();
        this.isDoneEdit();
        }

    handleClickUndone = () => {
        this.props.allUndone();
        this.isDoneEdit();
    }

    isDoneEdit = () => {
        const { allTasks, itemsDone } = this.props;

        if (allTasks === itemsDone) {
            this.setState({ 
                isDone: false,
            });
        } else { 
            this.setState({ 
                isDone: true,
            });
        }
    }

    render() {
        const { isDone } = this.state;
        const { allTasks, isDoneEdit } = this.props;

        return (
            <div className={'header'}>
                <div className='wrapper'>
                    {isDone ? (
                    <button 
                        isDoneEdit={isDoneEdit}
                        onClick={this.handleClickUndone}
                        className={allTasks > 0 ? 'showAllDoneBtn allDoneBtn d' : 'allDoneBtn d'}
                    >
                        ∟   
                    </button>
                    ) : (
                    <button 
                        isDoneEdit={isDoneEdit}
                        onClick={this.handleClickDone}
                        className={allTasks > 0 ? 'showAllDoneBtn allDoneBtn v' : 'allDoneBtn v'}
                    >
                        ∟   
                    </button>
                    )}
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