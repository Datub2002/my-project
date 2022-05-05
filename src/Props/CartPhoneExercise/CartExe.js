import React, { Component } from 'react';
import ModalCart from './ModalCart';
import ProductList from './ProductList';

class CartExe extends Component {




    mangSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./images/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./images/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./images/applephone.jpg" }
    ];

    state = {
        
        sanPhamChiTiet: { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./images/vsphone.jpg" },
        cart: [
        ]
            
        
    }
    handleClick = (sanPham) => {
        this.setState({
            sanPhamChiTiet: { ...sanPham }
        })
    }
    addToCart = (item) =>{
            let spGioHang = {
                maSP : item.maSP,
                tenSP: item.tenSP,
                donGia: item.giaBan,
                soLuong: 1,
                hinhAnh: item.hinhAnh,

            }
            let index = this.state.cart.findIndex((sanPham) =>sanPham.maSP === spGioHang.maSP )
            if(index !== -1) {
                this.state.cart[index].soLuong +=1;
            } else{
                this.state.cart.push(spGioHang);
            }

            this.setState({
                cart : this.state.cart
            })

    

    }
    removeItem = (maSP) =>{
        let index =  this.state.cart.findIndex((spGioHang) =>{
            return spGioHang.maSP === maSP
        })
        if(index !== -1)
        {
            this.state.cart.splice(index,1);
        }
        this.setState({
            cart : this.state.cart
        })
    }

    totalItem = () =>{
        // for
        // reduce
        return this.state.cart.reduce((total,currentValue)=>{
            return total = total + currentValue.soLuong;
        },0)
    }



    render() {
        return (

            <div className='container'>

                <h3 className='display-4 mb-4 text-center'>Danh Sách Sản Phẩm </h3>

                <div className='text-right mb-3'>
                    <span style={{ cursor: 'pointer' }} data-toggle="modal" data-target="#modelId">


                        <i className="fa fa-shopping-cart"></i>({this.totalItem()})Giỏ Hàng

                    </span>


                </div>
                <ModalCart removeItem={this.removeItem} state={this.state.sanPhamChiTiet} newState={this.state.cart} />
                <ProductList  addToCart={this.addToCart} state={this.state.sanPhamChiTiet} func={this.handleClick} item={this.mangSanPham} />
            </div>
        );
    }
}

export default CartExe;