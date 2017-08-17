import React, { Component } from 'react';
import QuickEditInput from "./QuickEditInput";

export default class TaskItem extends Component {
    render() {
        return (
            <li className={this.props.task.isCompleted ? 'task-completed' : ''}>
                <button onClick={() => this.props.onClickCompleteTaskBtn(this.props.task)}>v</button>
                <QuickEditInput value={this.props.task.title} saveValue={(taskTitle) => {return this.props.onTaskInputBlur(taskTitle, this.props.task)}} />
                <button onClick={() => this.props.onClickDeleteBtn(this.props.task)}>x</button>
            </li>
        )
    }
}