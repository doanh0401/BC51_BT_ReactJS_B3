import React, { Component } from "react";
import ShoeList from "./ShoeList";
import Display from "./Modal";
import data from "../data/data.json";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import GioHang from "./GioHang";
export default class Shoesstore extends Component {
  state = {
    shoeDetail: data[0],
    isShow: false,
    cartList: [],
    isShowGH: false,
  };

  handleDetail = (element, isClick) => {
    this.setState({
      shoeDetail: element,
      isShow: isClick,
    });
  };

  handleClose = (isClick) => {
    this.setState({
      isShow: isClick,
    });
  };

  handleCloseGH = (isClick) => {
    this.setState({
      isShowGH: isClick,
    });
  };

  handleShowGH = (isClick) => {
    this.setState({
      isShowGH: isClick,
    });
  }
  addToCart = (shoe) => {
    const data = [...this.state.cartList];
    const index = data.findIndex((element) => {
      return element.id === shoe.id;
    });
    if (index !== -1) {
      // tang so luong sp
      data[index].soLuong += 1;
    } else {
      //push vao mang gio Hang
      data.push({ ...shoe, soLuong: 1 });
    }
    this.setState(
      {
        cartList: data,
      }
    );
  };

  handleQuantity = (id, isIncrease) => {
    const data = [...this.state.cartList];
    const index = data.findIndex((element) => {
      return element.id === id;
    });
    if (isIncrease) {
      // tang so luong sp
      data[index].soLuong += 1;
    } else {
      if (data[index].soLuong === 1) {
        const result = window.confirm("Bạn có muốn xóa sản phẩm không?");
        if (result) data.splice(index, 1);
      } else {
        data[index].soLuong -= 1;
      }
    }
    this.setState(
      {
        cartList: data,
      }
    );
  };

  deleteItem = (id) => {
    const result = window.confirm("Bạn có muốn xóa sản phẩm không?");
    if (result) {
      const data = [...this.state.cartList];
      const index = data.findIndex((element) => {
        return element.id === id;
      });
      data.splice(index, 1);
      this.setState(
        {
          cartList: data,
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Header />
        <GioHang
          cartList={this.state.cartList}
          handleQuantity={this.handleQuantity}
          deleteItem={this.deleteItem}
          handleShowGH={this.handleShowGH}
          show={this.state.isShowGH} 
          handleCloseGH={this.handleCloseGH}
        />
        <ShoeList data={data} handleDetail={this.handleDetail}
        addToCart={this.addToCart}/>
        <Display
          detail={this.state.shoeDetail}
          show={this.state.isShow}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}
