import React from 'react';
import Card from './Card';

/**
 * ProductList:
 * renders all of the products in the REST API database as a set of cards, 
 * each card contains a view, edit, and delete link
 *
 * @class ProductList
 * @extends {React.Component}
 */
class ProductList extends React.Component{
    
    /**
     * handleSelectOne:
     * passes the value from a card that has been selected for viewing to the App component
     *
     * @param {*} productid
     * @memberof ProductList
     */
    handleSelectOne = (productid) => {
        console.log("Selected id = ", productid);
        this.props.onClick(productid);
    }

    /**
     * handleEdit:
     * passes the value from a card that has been selected for editing to the App component
     *
     * @param {*} productid
     * @memberof ProductList
     */
    handleEdit = (productid) => {
        console.log("Editing ", productid);
        this.props.onEdit(productid);
    }

    /**
     * handleEdit:
     * passes the value from a card that has been selected for deletion to the App component
     *
     * @param {*} productid
     * @memberof ProductList
     */
    handleDelete = (productid) => {
        console.log("Deleting ", productid);
        this.props.onDelete(productid);
    }

    /**
     * render:
     * renders the component
     *
     * @return {*} 
     * @memberof ProductList
     */
    render () {
        console.log(this.props.productList)
        const products = this.props.productList.map(
            (product) => {
                console.log(product)
                return (<Card 
                    id = {product.id}
                    name = {product.name}
                    type = {product.type}
                    shelflife = {product.shelflife}
                    price = {product.price}
                    buttonText = "SELECT"
                    onClick = {this.handleSelectOne}
                    edit = {this.handleEdit}
                    delete = {this.handleDelete}/>)
            }
        )

        return ( <div className="container">
            {products}
        </div>)
    }
}

export default ProductList;