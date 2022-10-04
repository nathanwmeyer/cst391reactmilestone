import React from "react";
import axios from "axios";
/**
 * DeleteProduct:
 * uses Axios to remove a product from the REST API database after prompting the user for confirmation.
 *
 * @class DeleteProduct
 * @extends {React.Component}
 */
class DeleteProduct extends React.Component {

    /**
     * delete:
     * handler for the delete button, calls deleteProduct for deletion
     *
     * @param {*} e
     * @memberof DeleteProduct
     */
    delete = (e) => {
        console.log("Now deleting... ", this.props.product.id);
        this.deleteProduct(this.props.product.id);
    }

    /**
     * cancel:
     * redirects back to the main page using the history props passed in
     *
     * @param {*} e
     * @memberof DeleteProduct
     */
    cancel = (e) => {
        this.props.history.push("/");
    }

    /**
     * deleteProduct:
     * deletes a product using axios.delete, then returns a message depending on if the action is successful or unsuccessful.
     *
     * @param {*} e
     * @memberof DeleteProduct
     */
    deleteProduct = (e) => {
        console.log("deleting...");
        var axiosURL = 'https://gcucst391express.azurewebsites.net/products/' + this.props.product.id;
        axios.delete(axiosURL)
        .then(result => {
            console.log(result);
            console.log(result.data);
            alert("The product has been deleted!");
            this.props.history.push("/");
            this.props.reload();
        })
        .catch(() => {
            alert("Something went wrong, the product was not deleted.");}
        )
        
    }

    /**
     * render:
     * renders the component, contains the buttons that either confirm the deletion or cancel the deletion and navigate back to the home page
     *
     * @return {*} 
     * @memberof DeleteProduct
     */
    render() {
        return (
            <div className="container">
                <h1>Are you sure you want to delete '{this.props.product.name}'?</h1>
                <button type="button" onClick={this.cancel} className="btn btn-light">Cancel</button>
                <button type="button" onClick={this.delete} className="btn btn-danger">Delete</button>
            </div>
        )
    }   
}

export default DeleteProduct;