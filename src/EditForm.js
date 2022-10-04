import axios from 'axios';
import React from 'react';
import FormInput from './FormInput';
import FormNumber from './FormNumber';

/**
 * EditForm:
 * takes a product as a prop and applies it to a form, allowing the user to edit a product.
 * After the user submits the edit, the component gives a confirmation or rejection message 
 * depending on the axios.put results
 *
 * @class EditForm
 * @extends {React.Component}
 */
class EditForm extends React.Component {

    /**
     * state:
     * contains all of the information from the passed in product prop and holds the edited information
     * to be used to update the REST API database
     *
     * @memberof EditForm
     */
    state = {
        id: this.props.product.id,
        name: this.props.product.name,
        type: this.props.product.type,
        shelflife: this.props.product.shelflife,
        price: this.props.product.price

    }
    
    /**
     * updateName:
     * updates the name state when a change occurs
     *
     * @param {*} t
     * @memberof EditForm
     */
    updateName = (t) => {
        this.setState( {name: t}, () =>  console.log("State of form = ", this.state));
    }

    /**
     * updateType:
     * updates the type state when a change occurs
     *
     * @param {*} t
     * @memberof EditForm
     */
    updateType = (t) => {
        this.setState( {type: t}, () =>  console.log("State of form = ", this.state));
    }

    /**
     * updateShelflife:
     * updates the shelflife state when a change occurs
     *
     * @param {*} t
     * @memberof EditForm
     */
    updateShelflife = (t) => {
        this.setState( {shelflife: t}, () =>  console.log("State of form = ", this.state));
    }

    /**
     * updatePrice:
     * updates the price state when a change occurs
     *
     * @param {*} t
     * @memberof EditForm
     */
    updatePrice = (t) => {
        this.setState( {price: t}, () =>  console.log("State of form = ", this.state));
    }

    /**
     * handleFormSubmit:
     * handler for when the edit form is submitted by the user, calls saveProduct to update the database
     *
     * @param {*} e
     * @memberof EditForm
     */
    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Final submission = ", this.state);
        this.saveProduct(this.state);
    }

    /**
     * saveProduct:
     * uses axios to update the REST API database with the updated state and gives an alert if the
     * product has been successfully or unsuccessfully updated.
     *
     * @param {*} product
     * @memberof EditForm
     */
    saveProduct = async (product) => {
        console.log("saving...");
        var link = 'https://gcucst391express.azurewebsites.net/products/' + this.state.id;
        axios.put(link, product)
        .then(result => {
            console.log(result);
            console.log(result.data);
            alert("The product has been edited!");
            this.props.history.push("/");
            this.props.reload();
        })
        .catch(() => {
            alert("Something went wrong, the product was not edited.");}
        )
        
    }

    /**
     * cancel:
     * navigates back to the main page using the passed in history prop
     *
     * @memberof EditForm
     */
    cancel = () => {
        this.props.history.push("/");
    }

    /**
     * render:
     * renders the component, this component contains a form that is set to the values of the passed
     * in product, allows the user to submit the form and edit the product selected
     *
     * @return {*} 
     * @memberof EditForm
     */
    render () {
        return (
            <div className="container">
                <form onSubmit={this.handleFormSubmit}>
        <div className="form-group">
            <h1>Create a new album</h1>
            <FormInput id="productName" type="text" title = "Product Name" value = {this.state.name} placeholder = "Product Name" onChange = {this.updateName}/>
            <FormInput id="productType" type="text" title = "Product Type" value = {this.state.type} placeholder = "Product Type" onChange = {this.updateType}/>
            <FormNumber id="productShelflife" type="text" title = "Product Shelflife" value = {this.state.shelflife} placeholder = "0" step = "1" onChange = {this.updateShelflife}/>
            <FormNumber id="productPrice" type="text" title = "Product Price" value = {this.state.price} placeholder = "0" step = ".01" onChange = {this.updatePrice}/>
            
        </div>
        <button type="button" onClick={this.cancel} className="btn btn-light">Cancel</button>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>)
    }
}

export default EditForm