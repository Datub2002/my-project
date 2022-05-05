import React, { Component } from 'react';
import Modal from './Modal';
import ProductItem from './ProductItem';
import ProductList from './ProductList';


class ExerciseCarStore extends Component {


        products = [
            { id:1,name : 'black car', img: './img/products/black-car.jpg',price: 1000},
            { id:1,name : 'red car', img: './img/products/red-car.jpg',price: 2000},
            { id:1,name : 'silver car', img: './img/products/silver-car.jpg',price: 3000},
            { id:1,name : 'steel car', img: './img/products/steel-car.jpg',price: 4000},

        ]
        state = {
            productDetails :  { id:1,name : 'black car', img: './img/products/black-car.jpg',price: 1000}
        }
            
        setStateModel = (item) =>{
            this.setState({
                productDetails : item

            },() => console.log(item))
        }

    render() {
        return (
            <div>
                <Modal content={this.state.productDetails} />
                <ProductList productsData={this.products}  setStateModel={this.setStateModel}    
                
                    
                 /> 
            </div>
        );
    }
}

export default ExerciseCarStore;