import React, { Component } from "react";

import './style/header.css'

class Header extends Component {
    createNewTask = e => {
        if (e.key === 'Enter') {
            const newTask = {
                    id: Date.now().toString(), 
                    title: e.currentTarget.value,
                    done: false
            };
            this.props.onCreate(newTask);

            e.currentTarget.value = '';
        }
    }

    render() {
        const { allDone, allTasks } = this.props;
        return (
                <div className={'header'}>
                    <div className='wrapper'>
                        <button 
                            onClick={allDone}
                            className={allTasks > 0 ? 'showAllDoneBtn allDoneBtn' : 'allDoneBtn'}
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