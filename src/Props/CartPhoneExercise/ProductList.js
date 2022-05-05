import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {



    renderProducts() {
        return this.props.item.map((item, i) => {

            return <div key={i} className='col-4 '>
                <ProductItem addToCart={this.props.addToCart} func={this.props.func} item={item} />
                
            </div>
        }
        )
    }
   
    render() {
        return (
           
                <div className='row'>
                    {this.renderProducts()}
                 

                    <div className='mt-5 col-4 text-center'>
                        <h3>{this.props.state.tenSP}</h3>
                        <img style={{ width: '100%' }} src={this.props.state.hinhAnh} alt={this.props.state.hinhAnh} />

                    </div>
                    <div className='col-8 mt-5'>
                        <h4 className='display-5'>Thông số kĩ thuật</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Màn hình</th>
                                    <th>{this.props.state.manHinh}</th>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <th>{this.props.state.heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <th>{this.props.state.cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <th>{this.props.state.cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <th>{this.props.state.ram}</th>
                                </tr>
                                <tr>
                                    <th>Rom</th>
                                    <th>{this.props.state.rom}</th>
                                </tr>
                            </thead>
                        </table>

                    </div>
                    
                </div>
                








                
            

        );
    }
}

export default ProductList;