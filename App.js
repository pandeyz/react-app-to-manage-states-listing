import React, { Component } from 'react';

import AddState from './AddState';
import ListStates from './ListStates';

class App extends Component {
    constructor()
    {
        super();

        this.state = {
            states: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam']
        };
    }

    addState = (newState) => {
        // Create a new array by pushing the new value to the existing array
        // const newStates = this.state.states.concat(newState);

        // Override the existing state variable
        // this.setState({ states: newStates });

        // Using spread operator
        this.setState({ states: [...this.state.states, newState] });
    }

    removeState = (state) => {
        // Make a separate copy of the array
        const newStates = [...this.state.states];

        // Get the index of the element
        const index = newStates.indexOf(state);

        // Remove the element from the array
        newStates.splice(index, 1);

        // Set the state with updated array
        this.setState({ states: newStates });
    }

    render() {
        return (
            <div className="container">
                <AddState addState={this.addState} />
                <ListStates states={this.state.states} removeState={this.removeState} />
            </div>
        );
    }
}

export default App;
