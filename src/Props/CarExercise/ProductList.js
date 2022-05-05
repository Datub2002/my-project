import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {
 

    renderCars() {
        return this.props.productsData.map((item, i) => {
            return <div key={i} className='col-3'>
                    <ProductItem item={item} setStateModel={this.props.setStateModel}/>

               </div>
        })
    }





    render() {
        return (
            <div className='container'>
                <h3 className='display-4'>Cars list</h3>
                <div className='row'>
                    {this.renderCars()}
                </div>

            </div>
        );
    }
}

export default ProductList;