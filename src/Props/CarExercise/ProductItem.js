import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <div className="card">
                    <img className="card-img-top" src={this.props.item.img} alt={this.props.item.img} />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.item.name}</h4>
                        <p className="card-text">{this.props.item.price}</p>

                        <button  data-toggle="modal" data-target="#modelId"  onClick={() =>this.props.setStateModel(this.props.item)} className='btn btn-primary'>Details</button>
                    </div>
                </div>

        )
    }
}

export default ProductItem;