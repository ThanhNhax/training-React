import React, { Component } from "react";
import { connect } from "react-redux";
class Menu extends Component {
  renderMenu = () => {
    const { burger } = this.props;
    return burger.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>
            <button
              className="btn btn-success mx-2"
              onClick={() => {
                const action = {
                  type: "CHANGE_TOPPING",
                  payload: {
                    id: item.id,
                    quantity: 1,
                  },
                };
                //Gửi dữ liệu lến redux
                this.props.dispatch(action);
              }}
            >
              +
            </button>
            {item.quantity}
            <button
              className="btn btn-danger mx-2"
              onClick={() => {
                const action = {
                  type: "CHANGE_TOPPING",
                  payload: {
                    id: item.id,
                    quantity: -1,
                  },
                };
                //Gửi dữ liệu lến redux
                this.props.dispatch(action);
              }}
            >
              -
            </button>
          </td>
          <td>{item.price}</td>
        </tr>
      );
    });
  };

  tinhTongTien = () => {
    const { burger } = this.props;
    return burger.reduce((total, item, index) => {
      return (total += item.quantity * item.price);
    }, 0);
  };
  render() {
    const { burger } = this.props;
    return (
      <div>
        <h3>Menu</h3>
        <table className="table">
          <thead>
            <tr>
              <td>Topping</td>
              <td>quantity</td>
              <td>price</td>
            </tr>
          </thead>
          <tbody>
            {this.renderMenu()}

            <tr>
              <td colSpan={2}></td>
              <td>Total: {this.tinhTongTien()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  burger: state.burgerReducer.burger,
});

export default connect(mapStateToProps)(Menu);
