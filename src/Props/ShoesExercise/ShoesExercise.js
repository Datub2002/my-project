import React, { Component } from 'react';
import Modal from './Modal';
import ProductsList from './ProductsList';

class ShoesExercise extends Component {


        state ={
            currentItem :  {
                "id": 1,
                "name": "Adidas Prophere",
                "alias": "adidas-prophere",
                "price": 350,
                "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                "quantity": 995,
                "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
              }
        }


        setStateFunc = (item) =>{
          this.setState({
              currentItem: item
          })
        }

    render() {
        return (
            <div>
                <Modal state={this.state.currentItem}/>
                <ProductsList setStatefunc={this.setStateFunc} itemArr={this.props.data}/>


            </div>
        );
    }
}

export default ShoesExercise;