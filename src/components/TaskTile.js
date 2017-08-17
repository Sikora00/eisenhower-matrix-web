import React, { Component } from 'react';
import QuickEditInput from "./QuickEditInput";

class Task {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}

export default class TaskTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: this.getTasks(),
            newTaskTitle: ''
        };
    }

    getTasks() {
        // For now it is implemented to generate random tasks
        return Array(Math.floor(Math.random()*10) + 1).fill(null).map(function (task, i) {
            return new Task(i, 'Task #' + i);
        })
    }

    addTask(task) {
        // Send request to API

        return true;
    }

    deleteTask(task) {
        // Send request to API

        return true;
    }

    updateTask(task) {
        // Send request to API

        return true;
    }

    onFormSubmit(e) {
        e.preventDefault();
        if (!this.state.newTaskTitle) {
            return;
        }
        const task = new Task(this.state.tasks.length+1, this.state.newTaskTitle);
        if ( this.addTask(task) ) {
            this.setState({
                tasks: this.state.tasks.concat(task),
                newTaskTitle: ''
            });
        }
    }

    onNewTaskInputChange(e) {
        this.setState({
            newTaskTitle: e.target.value
        });
    }

    onClickDeleteBtn(task) {
        if (this.deleteTask(task)) {
            this.setState({
                tasks: this.state.tasks.filter(function (taskItem) {
                    return taskItem.id !== task.id;
                })
            });
        }
    }

    onTaskInputBlur(taskTitle, task) {
        task.titile = taskTitle;

        return this.updateTask(task);
    }

    render() {
        const _this = this;
        const tasksHtml = this.state.tasks.map(function (task) {
            return (
                <li key={task.id}>
                    <QuickEditInput value={task.title} saveValue={(taskTitle) => {return _this.onTaskInputBlur(taskTitle, task)}} />
                    {task.title}
                    <button onClick={() => _this.onClickDeleteBtn(task)}>x</button>
                </li>
            )
        });

        return (
            <div className="task-tile">
                <h4>{this.props.name}</h4>
                <ul>
                    {tasksHtml}
                </ul>
                <form onSubmit={(e) => {this.onFormSubmit(e)}}>
                    <input type="text" placeholder="Add task" onChange={(e) => {this.onNewTaskInputChange(e)}} value={this.state.newTaskTitle}/>
                    <button>+</button>
                </form>
            </div>
        )
    }
}

