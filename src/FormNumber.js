import React from 'react';

/**
 * FormNumber:
 * A simple form input for making forms easily, takes props for input title, value to have in the form initially,
 * id, and a placeholder. This version accepts numbers instead of a string
 *
 * @class FormInput
 * @extends {React.Component}
 */
class FormNumber extends React.Component {

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
     * renders the form number element
     *
     * @return {*} 
     * @memberof FormInput
     */
    render () {
        return (<div>
            <label for={this.props.id}>{this.props.title}</label>
            <input type = "number" onChange = {this.handleChangeData} className="form-control" value= {this.props.value} id={this.props.id} placeholder={this.props.placeholder} step = {this.props.step}/>
        </div>)
    }
}

export default FormNumber;