import React, { Component } from 'react';

class Task {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}

export default class TaskTile extends Component {
    constructor() {
        super();
        this.state = {
            tasks: this.getTasks()
        };
    }

    getTasks() {
        // For now it is implemented to generate random tasks
        return Array(Math.floor(Math.random()*10) + 1).fill(null).map(function (task, i) {
            return new Task(i, 'Task #' + i);
        })
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
                <input type="text" placeholder="Add task"/>
                <button>+</button>
            </div>
        )
    }
}