import React, { Component } from "react";
import { connect } from "react-redux";

class Burger extends Component {
  // renderBurger = (id) => {
  //   const { burger } = this.props;
  //   // let cheese = burger.find((item) => item.id === id);
  //   // Số lượng
  //   let { quantity } = burger.find((item) => item.id === id);
  //   const arrDivJSX = [];
  //   for (let i = 0; i < quantity; i++) {
  //     // Mỗi lần duyệt tạo ra 1 div đưa vào arr
  //     const diVTopping = <div className={id} key={i}></div>;
  //     arrDivJSX.push(diVTopping);
  //   }
  //   return arrDivJSX;

  // };

  // Của thầy Khải
  renderTopping = (id) => {
    const { burger } = this.props;
    let cheese = burger.find((item) => item.id === id);
    //Số lượng
    let { quantity } = cheese;
    const arrDivJSX = [];
    for (let i = 0; i < quantity; i++) {
      //Mỗi lần duyệt tạo ra 1 div đưa vào arr
      const divTopping = <div className={id} key={i}></div>;
      arrDivJSX.push(divTopping);
    }
    return arrDivJSX; // [<div>1</div>,<div>2</div>]
  };
  render() {
    return (
      <div className="">
        <div className="breadTop"></div>
        {/* {this.renderBurger("cheese")}
        {this.renderBurger("salad")}
        {this.renderBurger("beef")} */}
        {this.renderTopping("cheese")}
        {this.renderTopping("beef")}
        {this.renderTopping("salad")}
        <div className="breadBottom"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  burger: state.burgerReducer.burger,
});

export default connect(mapStateToProps)(Burger);
