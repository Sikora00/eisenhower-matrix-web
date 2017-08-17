import React, { Component } from 'react';

export default class QuickEditInput extends Component {
    input = null;

    constructor(props) {
        super(props);
        this.state = {
            isDisabled: true,
            inputValue: this.props.value,
            previousValue: this.props.value
        }
    }

    onClickContainer() {
        this.setState({
            isDisabled: false
        });

        setTimeout(() => {
            this.input.focus();
            this.input.setAttribute('focused', 'focused');
        });
    }

    onInputChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    onInputBlur() {
        if (this.props.saveValue(this.state.inputValue)) {
            this.setState({
                isDisabled: true
            });
        } else {
            this.setState({
                inputValue: this.state.previousValue
            });
        }
    }

    render() {
        return (
            <div className="quick-edit-input" onClick={() => this.onClickContainer()}>
                <input ref={(input) => this.input = input} type="text" disabled={this.state.isDisabled} onChange={(e) => this.onInputChange(e)} onBlur={() => this.onInputBlur()} value={this.state.inputValue} placeholder={this.props.placeholder}/>
            </div>
        )
    }
}