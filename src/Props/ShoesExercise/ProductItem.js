import React, { Component } from 'react';


class ProductItem extends Component {
    render() {
        return (
            
                <div  className="card mt-4" style={{width:'300px',minHeight:'400px'}}>
                    <img className="card-img-top" style={{width:'100%',height:'100%'}} src={this.props.item.image} alt={this.props.item.image} />
                    <div className="card-body">
                        <h5 style={{fontSize:19}} className="card-title">{this.props.item.name}</h5>
                        <p className="card-text">{this.props.item.price}</p>
                        <button onClick={() =>this.props.setStatefunc(this.props.item)}  data-toggle="modal" data-target="#modelId" className='btn btn-primary'>View Details</button>
                    </div>
                </div>
            
       
            
        );
    }
}

export default ProductItem;