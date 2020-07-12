import React, { Component } from "react";
import Task from "./Task"

class TasksList extends Component {

    render() {
        const { 
            onUpdate, 
            onDelete, 
            onSaveEdit, 
        } = this.props;
        
        return (
            <div className="tasks">
                {
                    this.props.tasks.map(({id, title, done}) => (
                        <Task
                            key={id}
                            id={id}
                            title={title}
                            done={done} 
                            onUpdate={onUpdate}
                            onDelete={onDelete} 
                            onSaveEdit={onSaveEdit}
                        />
                    ))
                }
            </div>
        );
    }
}

export default TasksList;