import React, { Component } from 'react';

class ListStates extends Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <ul>
                    {this.props.states.map((item) => <li key={item}>{item} <button onClick={() => this.props.removeState(item)} className="btn btn-primary btn-sm">x</button></li>)}
                </ul>
            </div>
        );
    }
}

export default ListStates;
