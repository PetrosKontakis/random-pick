import React, { Component } from 'react';

type addNameState = {
    name: String
}

type addNameProps = {
    onValueSubmited: Function
}

export default class AddNameComponent extends Component<addNameProps, addNameState> {

    // Difault state setup
    state = {
        name: ""
    }

    // Handle on submit form event
    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        this.props.onValueSubmited(this.state.name);
        this.setState({ name: "" })
    }

    // Update state on change
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ name: e.target.value })
    }

    // render form
    render() {
        const { name } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="colFormLabelSm"
                        className="">Insert a name</label>
                    <div className="">
                        <input className="form-control form-control-sm" 
                        id="colFormLabelSm" 
                        placeholder="type a new name..." 
                        type="text" value={name} onChange={this.handleChange} />
                    </div>
                </div>
            </form>
        )
    }
}