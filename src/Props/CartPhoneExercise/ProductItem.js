import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (

            <div className="card text-dark text-center" style={{ width: '350px', minHeight: '400px' }}>
                <img style={{width:'320px',height:'350px' }} className="card-img-top" src={this.props.item.hinhAnh} alt={this.props.item.hinhAnh} />
                <div className="card-body">
                    <h4 className="card-title">{this.props.item.tenSP}</h4>
                    <p className="card-text">{this.props.item.giaBan.toLocaleString()}</p>
                    <div className='d-flex justify-content-around'>

                        <button onClick={() => { this.props.func(this.props.item) }} className='btn btn-primary'> Views Details</button>
                        <button onClick={() => {this.props.addToCart(this.props.item) }} className='btn btn-success'> Add to Cart</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default ProductItem;