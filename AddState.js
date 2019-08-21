import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';

class AddState extends Component {
    constructor(props)
    {
        super(props);

        // Form validation
        this.validator = new SimpleReactValidator();

        this.state = {
            stateName: ''
        }
    }

    handleInput = (event) => {
        this.setState({ stateName: event.target.value });
    }

    submitHandler = (event) => {
        event.preventDefault();

        if (this.validator.allValid()) {
            // Destructuring
            const {stateName} = this.state;

            this.props.addState(stateName);

            // Reset the field
            this.setState({ stateName: '' });
        }
        else
        {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    render() {
        return (
            <div className="container">
                <form autoComplete="off" onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label htmlFor="state">State:</label>
                        <input type="text" className="form-control" name="state" value={this.state.stateName} onChange={this.handleInput} />
                        {this.validator.message('state', this.state.stateName, 'required')}
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddState;
