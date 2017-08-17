import React, { Component } from 'react';
import TaskItem from "./TaskItem";

class Task {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.isCompleted = false;
    }

    toggleComplete() {
        this.isCompleted = !this.isCompleted;
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
        return Array(Math.floor(Math.random()*5) + 1).fill(null).map(function (task, i) {
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

    onClickCompleteTaskBtn(task) {
        task.toggleComplete();
        if (this.updateTask(task)) {
            this.setState({
                tasks: this.state.tasks
            });
        }
    }

    render() {
        const _this = this;
        const tasksHtml = this.state.tasks.map(function (task) {
            return (
                <TaskItem key={task.id} task={task} onClickCompleteTaskBtn={(t) => _this.onClickCompleteTaskBtn(t)} onTaskInputBlur={(taskTitle, t) => {return _this.onTaskInputBlur(taskTitle, t)}} onClickDeleteBtn={(t) => _this.onClickDeleteBtn(t)}/>
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

