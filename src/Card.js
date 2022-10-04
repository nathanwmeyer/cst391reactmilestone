import React from 'react';

/**
 * Card:
 * Display product information
 *
 * @class Card
 * @extends {React.Component}
 */
class Card extends React.Component {

    /**
     * handleButtonClick:
     * passes the id of the product clicked and passes it up to the app to be used to display the product in OneProduct
     *
     * @param {*} event
     * @memberof Card
     */
    handleButtonClick = (event) => {
        console.log("id of clicked = " + this.props.id);
        this.props.onClick(this.props.id);
    }

    /**
     * handleEdit:
     * passes the id of the product clicked and passes it up to the app to be used to display the product in EditForm
     *
     * @param {*} e
     * @memberof Card
     */
    handleEdit = (e) => {
        this.props.edit(this.props.id);
    }

    /**
     * handleDelete:
     * passes the id of the product clicked and passes it up to the app to be used to display the product in DeleteProduct
     *
     * @param {*} e
     * @memberof Card
     */
    handleDelete = (e) => {
        this.props.delete(this.props.id);
    }

    /**
     * render:
     * renders the Card component, contains buttons that allow the user to view, edit, and delete products
     *
     * @return {*} 
     * @memberof Card
     */
    render () {
        return (
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">Type: {this.props.type}</p>
                    <p className="card-text">Shelf Life: {this.props.shelflife} | Price: ${this.props.price}</p>
                    <a href="#" onClick={this.handleButtonClick} className="btn btn-primary">{this.props.buttonText}</a>
                    <a href="#" onClick={this.handleEdit} className="btn btn-secondary">EDIT</a>
                    <a href="#" onClick={this.handleDelete} className="btn btn-danger">DELETE</a>
                </div>
            </div>
        )
    }
}

export default Card;