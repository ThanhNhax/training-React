import React, { Component } from 'react'

export default class HandleEvent extends Component {
    handleClick = (e) => {
        alert("Hello!!!");
    }

    showMess = (name) => {
        alert(`Hello ${name}`);
    }
    render() {
        return (
            <div className='container'>
                <button id='btnClick' onClick={() => {
                    alert("Hello!");
                }}>Click me</button>
                <button className='btn btn-danger ml-2' onClick={this.handleClick}>Click</button>
                <hr />
                <h3>Handle click params</h3>
                <button onClick={(e) => {
                    this.showMess("nha");
                    // gọi các hàm khác thức thi khi click
                }}>Show mess</button>
                <button className='btn btn-primary ml-2' onClick={this.showMess.bind(this, "Menter Quân")}>Click</button>
            </div>
        )
    }
}
