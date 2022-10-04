import axios from 'axios';
import React from 'react';
import FormInput from './FormInput';
import FormNumber from './FormNumber';

/**
 * NewForm:
 * Provides a form to the user to create a new product.
 * After the user submits the new product, the component gives a confirmation or rejection message 
 * depending on the axios.post results
 *
 * @class NewForm
 * @extends {React.Component}
 */
class NewForm extends React.Component {

    /**
     * state:
     * holds the edited information
     * to be used to update the REST API database
     *
     * @memberof EditForm
     */
    state = {
        name: "none",
        type: "none",
        shelflife: 0,
        price: 0

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
     * handler for when the new form is submitted by the user, 
     * calls saveProduct to post the new product to the database
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
     * uses axios to update the REST API database with the new product and gives an alert if the
     * product has been successfully or unsuccessfully created.
     *
     * @param {*} product
     * @memberof EditForm
     */
    saveProduct = async (product) => {
        console.log("saving...");
        axios.post('https://gcucst391express.azurewebsites.net/products', product)
        .then(result => {
            console.log(result);
            console.log(result.data);
            alert("The product has been created!");
            this.props.history.push("/");
            this.props.reload();
        })
        .catch(() => {
            alert("Something went wrong, the product was not created.");}
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
            <h1>Create a new product</h1>
            <FormInput id="productName" type="text" title = "Product Name" placeholder = "Product Name" onChange = {this.updateName}/>
            <FormInput id="productType" type="text" title = "Product Type" placeholder = "Product Type" onChange = {this.updateType}/>
            <FormNumber id="productShelflife" type="text" title = "Product Shelflife" placeholder = "0" step = "1" onChange = {this.updateShelflife}/>
            <FormNumber id="productPrice" type="text" title = "Product Price" placeholder = "0" step = ".01" onChange = {this.updatePrice}/>
            
        </div>
        <button type="button" onClick={this.cancel} className="btn btn-light">Cancel</button>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>)
    }
}

export default NewForm