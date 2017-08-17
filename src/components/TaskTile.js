import React, { Component } from 'react';

export default class TaskTile extends Component {
    render() {
        const numberOfItems = Math.floor(Math.random()*10) + 1;
        let itemsHtml = [];
        for (let i = 0; i < numberOfItems; i++) {
            itemsHtml.push(<li key={i}>Item {i}</li>);
        }
        return (
            <div className="task-tile">
                <h4>{this.props.name}</h4>
                <ul>
                    {itemsHtml}
                </ul>
                <input type="text" placeholder="Add task"/>
                <button>+</button>
            </div>
        )
    }
}