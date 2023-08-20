import React, { Component } from "react";
import Shoe from "./Shoe";

export default class ShoeList extends Component {
  renderShoeList = () => {
    return this.props.data.map((element) => {
      return (<div key={element.id} className="col-4 mb-4">
        <Shoe
          element={element}
          handleDetail={this.handleDetail}
          addToCart = {this.addToCart}
        />
        </div>
      );
    });
  };

  addToCart = (shoe) => {
    this.props.addToCart(shoe);
}

  handleDetail = (element,isClick) => {
    this.props.handleDetail(element,isClick);
  };

  render() {
    return <div className="row mt-3 mx-auto">{this.renderShoeList()}</div>;
  }
}
