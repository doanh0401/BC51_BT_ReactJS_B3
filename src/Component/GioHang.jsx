import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default class GioHang extends Component {
  renderSP = () => {
    return this.props.cartList.map((element, idx) => {
      return (
        <tr key={element.id}>
          <td>{element.id}</td>
          <td>
            <img
              width={50}
              src={element.image}
              className="img-fluid"
              alt="shoe"
            />
          </td>
          <td>{element.name}</td>
          <td>
            <button
              className="btn btn-warning"
              onClick={() => this.props.handleQuantity(element.id, false)}
            >
              -
            </button>
            <span className="mx-1">{element.soLuong}</span>
            <button
              className="btn btn-warning"
              onClick={() => this.props.handleQuantity(element.id, true)}
            >
              +
            </button>
          </td>
          <td>{element.price.toLocaleString()}</td>
          <td>{(element.price * element.soLuong).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.props.deleteItem(element.id)}
            >
              XÓA
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="d-flex justify-content-end mb-2">
          <button
            onClick={() => this.props.handleShowGH(true)}
            type="button"
            className="btn btn-primary btn-lg"
          >
            GIỎ HÀNG ({this.props.cartList.length})
          </button>
        </div>
        <Modal
          size="xl"
          show={this.props.show}
          onHide={() => this.props.handleCloseGH(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Giỏ hàng</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table className="table">
              <thead>
                <tr>
                  <th>Mã SP</th>
                  <th>Hình Ảnh</th>
                  <th>Tên SP</th>
                  <th>Số lượng</th>
                  <th>Đơn Giá</th>
                  <th>Thành Tiền</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{this.renderSP()}</tbody>
            </table>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
