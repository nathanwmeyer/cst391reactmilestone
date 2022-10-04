import React from 'react';

/**
 * FormInput:
 * A simple form input for making forms easily, takes props for input title, value to have in the form initially,
 * id, and a placeholder. This version accepts a string
 *
 * @class FormInput
 * @extends {React.Component}
 */
class FormInput extends React.Component {

    /**
     * state: contains the input information
     *
     * @memberof FormInput
     */
    state = {inputData: ""};

    /**
     * handleChangeData:
     * updates the state whenever the input is updated
     *
     * @param {*} e
     * @memberof FormInput
     */
    handleChangeData = (e) => {
        this.setState({inputData : e.target.value }, () => 
        {console.log("contents of the input = ", this.state.inputData);
        this.props.onChange(this.state.inputData);});
        
    }
    
    /**
     * render:
     * renders the form input element
     *
     * @return {*} 
     * @memberof FormInput
     */
    render () {
        return (<div>
            <label for={this.props.id}>{this.props.title}</label>
            <input onChange = {this.handleChangeData} value= {this.props.value} className="form-control" id={this.props.id} placeholder={this.props.placeholder} />
        </div>)
    }
}

export default FormInput;