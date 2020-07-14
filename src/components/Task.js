import React, { Component } from 'react';

import './style/task.scss';

class Task extends Component {

    state = {
        value: '',
        isEdit: false,
    };

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
        const { isEdit } = this.state;
        const { done, title } = this.props;

        return (
             <div className={done ? 'task done' : 'task'}>
                <div 
                    className={done ? 'toggleDone' : 'toggleNotDone'}
                    onClick={this.handleUpdate} 
                />

                <div className='text'>
                    {isEdit ? (                 
                        <input 
                            type='text'
                            value={this.state.value} 
                            onChange={this.handleChange}
                            onBlur={this.handleSave}
                            autoFocus={true}
                            className='editTask'
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

export default Task;
