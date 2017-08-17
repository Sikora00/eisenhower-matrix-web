import React, { Component } from 'react';
import TaskTile from "./TaskTile";

export default class TasksMatrix extends Component {
    render() {
        return (
            <div className="tasks-matrix">
                <div className="row">
                    <div className="col col-6-of-12">
                        <TaskTile name="NOW"/>
                    </div>
                    <div className="col col-6-of-12">
                        <TaskTile name="SCHEDULE"/>
                    </div>
                    <div className="col col-6-of-12">
                        <TaskTile name="DELEGATE"/>
                    </div>
                    <div className="col col-6-of-12">
                        <TaskTile name="LATER"/>
                    </div>
                </div>
            </div>
        )
    }
}