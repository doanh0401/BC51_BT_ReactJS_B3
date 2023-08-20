import React, { Component } from "react";

export default class Shoe extends Component {
  render() {
    const { name, price, image } = this.props.element;
    return (
      <div className="card">
        <img className="card-img-top" src={image} alt="..." />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
            <h4>{price} $</h4>
            <button onClick={()=>this.props.handleDetail(this.props.element,true)} className="btn btn-success">XEM CHI TIẾT</button>
          <button onClick={()=>{this.props.addToCart(this.props.element)}}
            className="btn btn-dark"
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}
