import React, { Component } from 'react';

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

    onInputChange(e) {
        this.setState({
            newTaskTitle: e.target.value
        });
    }

    render() {
        const tasksHtml = this.state.tasks.map(function (task) {
            return <li key={task.id}>{task.title}</li>
        });

        return (
            <div className="task-tile">
                <h4>{this.props.name}</h4>
                <ul>
                    {tasksHtml}
                </ul>
                <form onSubmit={(e) => {this.onFormSubmit(e)}}>
                    <input type="text" placeholder="Add task" onChange={(e) => {this.onInputChange(e)}} value={this.state.newTaskTitle}/>
                    <button>+</button>
                </form>
            </div>
        )
    }
}

