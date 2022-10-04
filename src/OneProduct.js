import React from "react";

/**
 * OneProduct:
 * takes the passed in product prop and displays it to the user
 *
 * @class OneProduct
 * @extends {React.Component}
 */
class OneProduct extends React.Component {

    /**
     * render:
     * renders the component
     *
     * @return {*} 
     * @memberof OneProduct
     */
    render () {
        console.log("Props list: ", this.props);
        return (
            <div className="container">
                <h2>Product Details: {this.props.product.name}</h2><br/>
                <div className="col col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">{this.props.product.name}</h2>
                            <p className="card-text">{this.props.product.type}</p>
                            <p className="card-text">Shelf Life: {this.props.product.shelflife} days.</p>
                            <p className="card-text">Price: ${this.props.product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OneProduct;