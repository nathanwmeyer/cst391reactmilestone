import React from 'react';
import Card from './Card';
import './App.css';
import dataSource from './dataSource';
import NavBar from './NavBar';
import ProductList from './ProductList'
import OneProduct from './OneProduct';
import NewForm from './NewForm';
import EditForm from './EditForm';
import DeleteProduct from './DeleteProduct'
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
/**
 * The main class of the application, handles routing for the application
 *
 * @class App
 * @extends {React.Component}
 */
class App extends React.Component {

    state = {productlist : [], searchphrase : "", currentlySelectedproductId: -1}
    
    /**
     * updateSingleProduct:
     * prepares a product to be displayed by OneProduct and redirects to the OneProduct page
     *
     * @param {*} id
     * @memberof App
     */
    updateSingleProduct = (id) => {
        console.log("updateSingleProduct =", id);
        var indexnumber = 0;
        for (var i = 0; i < this.state.productlist.length; i++) {
            if (this.state.productlist[i].id == id)
            {
                indexnumber = i;
                console.log("Found an ID: ", indexnumber);
            }
        }
        this.setState({currentlySelectedproductId : indexnumber}, history.push('/show/' + indexnumber),
        console.log("state", this.state));
    }

    /**
     * editSingleProduct:
     * prepares a product to be displayed by EditForm and redirects to the EditForm page
     *
     * @param {*} id
     * @memberof App
     */
    editSingleProduct = (id) => {
        console.log("editing product ", id);
        var indexnumber = 0;
        for (var i = 0; i < this.state.productlist.length; i++) {
            if (this.state.productlist[i].id == id)
            {
                indexnumber = i;
                console.log("Found an ID: ", indexnumber);
            }
        }
        this.setState({currentlySelectedproductId : indexnumber}, history.push('/edit/' + indexnumber),
        console.log("state", this.state));
    }

    /**
     * deleteProduct:
     * prepares a product to be displayed by DeleteProduct and redirects to the DeleteProduct page
     *
     * @param {*} id
     * @memberof App
     */
    deleteProduct = (id) => {
        console.log("deleting product ", id);
        var indexnumber = 0;
        for (var i = 0; i < this.state.productlist.length; i++) {
            if (this.state.productlist[i].id == id)
            {
                indexnumber = i;
                console.log("Found an ID: ", indexnumber);
            }
        }
        this.setState({currentlySelectedproductId : indexnumber}, history.push('/delete/' + indexnumber),
        console.log("state", this.state));
    }

    /**
     * componentDidMount:
     * loads the products when the app is first loaded
     *
     * @memberof App
     */
    componentDidMount() {
        this.loadProducts();
    }

    /**
     * loadProducts:
     * uses axios to retrieve the list of products from the product API
     *
     * @memberof App
     */
    loadProducts = async () => {
        console.log("loading products");
        const response = await dataSource.get('/products');
        this.setState({productlist: response.data});
        console.log("products loaded")
    }

    /**
     * renderedList:
     * renders a list of cards containing product information, this method is unused
     *
     * @memberof App
     */
    renderedList = () => {
        return this.state.productlist.map(
            (product) => {
                return (<Card key = {product.id} productTitle = {product.title} productDescription= {product.description} buttonText = "OK" imgURL = {product.image} />);
            }
        )
    }

    /**
     * render:
     * renders the entire application, also contains a router for the other components in the application
     *
     * @return {*} 
     * @memberof App
     */
    render() {
        return  (
                <Router history = {history}>
                <div>
                    <NavBar />
                    <Switch>
                    <Route exact path = "/" component = { () => {
                    return (
                    <div className="container">
                        <ProductList productList={this.state.productlist} onClick={this.updateSingleProduct} onEdit={this.editSingleProduct} onDelete={this.deleteProduct}/>
                    </div>
                    )}
                    }/>
                    <div>
                        <Route exact path = "/new" render = { () => <NewForm reload = {this.loadProducts} history = {history}/>}/>
                        <Route exact path = "/show/:productId" render = { () => <OneProduct product={this.state.productlist [this.state.currentlySelectedproductId]} />} />
                        <Route exact path = "/edit/:productId" render = { () => <EditForm reload = {this.loadProducts} history = {history} product={this.state.productlist [this.state.currentlySelectedproductId]} />} />
                        <Route exact path = "/delete/:productId" render = { () => <DeleteProduct reload = {this.loadProducts} history = {history} product={this.state.productlist [this.state.currentlySelectedproductId]} />} />
                    </div>
                    </Switch>
                </div>
                </Router>
        )
    }
}

export default App;