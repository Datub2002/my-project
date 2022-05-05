import React, { Component } from 'react';



class ModalCart extends Component {
        renderCart(){
            let{newState} =this.props;
            return newState.map((item,i) =>{
                return <tr key={i}>
                    <td>{item.maSP}</td>
                    <td ><img style={{width:50}} src={item.hinhAnh} alt={item.hinhAnh}/></td>
                    <td>{item.tenSP}</td>
                    <td>{item.soLuong.toLocaleString()}</td>
                    <td>{item.donGia.toLocaleString()}</td>
                    <td>{(item.soLuong * item.donGia).toLocaleString()}</td>
                    <td><button className='btn btn-danger' onClick={() =>{this.props.removeItem(item.maSP)}}>Xóa</button></td>
                   
                </tr>
            })
        }
    render() {

        return (




            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div style={{minWidth:1000}}className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Giỏ Hàng </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Mã sản phẩm</th>
                                        <th>Hình Anh</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Số lượng</th>
                                        <th>Đơn giá</th>
                                        <th>Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderCart()}
                                </tbody>
                            </table>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default ModalCart;