import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductsList extends Component {



    renderItems() {
        return this.props.itemArr.map((item, i) => {

            return <div className='col-4' key={i} >

                <ProductItem item={item} setStatefunc={this.props.setStatefunc}/>
            </div>


        })


    }


    render() {
        return (
            <div className='container-fluid'>
                <div className='row' >

                    <div className='col-4'>
                        <div className="nav flex-column justify-content-center nav-pills" style={{ minHeight: 1000 }} id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#Shop" role="tab" aria-controls="Shop" aria-selected="false">Shop</a>

                        </div>
                   </div>

                    <div className='col-8'>
                            <h3 className='display-4 text-center' >Shoes Shop</h3>
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div className='row ' >

                                    {this.renderItems()}
                                </div>
                            </div>
                        <div className="tab-pane fade" id="Shop" role="tabpanel" aria-labelledby="v-pills-profile-tab">Shop</div>
                        </div>

                 </div>
                </div>


            </div>
        );
    }
}

export default ProductsList;