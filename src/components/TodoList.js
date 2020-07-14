import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Footer from './Footer';
import Header from './Header';
import TasksList from './TasksList';

import { 
    createTask,
    changeFilter, 
    updateTask, 
    deleteTask, 
    clearCompleted,
    saveEdit,
    allDone,
    allUndone,
} from '../redux/actions';

import './style/todoList.css';

class ToDoList extends Component {

    render() {
        const { 
            tasks,
            filter,
            allTasks,
            createNewTask,
            allDone,
            allUndone,
            updateTask, 
            deleteTask,
            itemsLeft,
            itemsDone,
            changeFilter, 
            clearCompleted,
            saveEdit,
        } = this.props;

        return (
            <div className='todoList'>
                <Header 
                    onCreate={createNewTask} 
                    allDone={allDone}
                    allUndone={allUndone}
                    allTasks={allTasks}
                    itemsLeft={itemsLeft}
                    itemsDone={itemsDone}
                />
                <TasksList 
                    tasks={tasks} 
                    onUpdate={updateTask}
                    onDelete={deleteTask}
                    onSaveEdit={saveEdit}
                />

                <Footer 
                    filter={filter} 
                    allTasks={allTasks}
                    itemsLeft={itemsLeft}
                    onFilterChanged={changeFilter} 
                    clearCompleted={clearCompleted}
                />
            </div>
        );
    }
}

const filterTask = state => {
    const { filter, tasks } = state;

    switch(filter) {
        case 'active':
            return tasks.filter(t => !t.done);

        case 'completed': 
            return tasks.filter(t => t.done);

        default: return tasks
    }
}

const mapStateToProps = state => ({
    tasks: filterTask(state),
    filter: state.filter,
    itemsLeft: state.tasks.filter(t => !t.done).length,
    itemsDone: state.tasks.filter(t => t.done).length,
    allTasks: state.tasks.length,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    createNewTask: createTask,
    updateTask,
    deleteTask,
    changeFilter,
    clearCompleted,
    saveEdit,
    allDone,
    allUndone,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
