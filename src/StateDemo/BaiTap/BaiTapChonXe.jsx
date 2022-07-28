import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        srcImg: './img/product/red-car.jpg' // Xác định default state
    }


    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <img src={this.state.srcImg} className='w-100' alt="" />
                    </div>
                    <div className='col-6'>
                        <button className='btn text-white mx-2' style={{ background: 'red' }} onClick={() => {
                            this.setState({
                                srcImg: './img/product/red-car.jpg' // Xác định default state

                            })
                        }}>Red</button>
                        <button className='btn text-white mx-2' style={{ background: 'black' }} onClick={() => {
                            this.setState({
                                srcImg: './img/product/black-car.jpg' // Xác định default state

                            })
                        }}>Black</button>
                        <button className='btn text-white mx-2' style={{ background: 'silver' }} onClick={() => {
                            this.setState({
                                srcImg: './img/product/silver-car.jpg' // Xác định default state

                            })
                        }}>Bạc</button>
                        <button className='btn text-black mx-2' style={{ background: '#eee' }} onClick={() => {
                            this.setState({
                                srcImg: './img/product/steel-car.jpg' // Xác định default state

                            })
                        }} >Stell</button>
                    </div>
                </div>
            </div >
        )
    }
}
