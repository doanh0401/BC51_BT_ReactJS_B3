import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default class Display extends Component {
  render() {
    const {name,price,description,quantity,image} =this.props.detail;
    return (
      <Modal 
        size="lg"
        show={this.props.show}
        onHide={() => this.props.handleClose(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Thông tin chi tiết</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mt-4">
            <div className="col-7">
              <table className="table">
                <thead>
                  <tr>
                    <td colSpan={2}>
                      <h1>Thông tin</h1>
                    </td>
                  </tr>
                  <tr>
                    <td>Tên</td>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <td>Giá</td>
                    <td>{price}</td>
                  </tr>
                  <tr>
                    <td>Số lượng</td>
                    <td>{quantity}</td>
                  </tr>
                  <tr>
                    <td>Mô tả</td>
                    <td>{description}</td>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="col-5 text-center">
              <img className="img-fluid" alt="..." src={image} />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}
