import React, { Component } from 'react'

export default class BaiTapTangGiamFontSize extends Component {

    state = {
        fSize: 16 //default 16px
    }
    render() {
        return (
            <div className='container'>
                <h3>Bài tập tăng giảm fontSize</h3>
                {/*                 16 +px => 16px */}
                <p style={{ fontSize: this.state.fSize + 'px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus commodi reiciendis optio dignissimos quibusdam necessitatibus ea assumenda harum rem, incidunt quis tenetur, adipisci, ratione quisquam quas a fugiat odit. Porro.</p>
                <button className='btn btn-primary mx-2' onClick={() => {
                    this.setState({
                        fSize: this.state.fSize + 5
                    })
                }}>+</button>
                <button className='btn btn-primary mx-2' onClick={() => {
                    this.setState({
                        fSize: this.state.fSize - 5
                    })
                }}>-</button>
            </div>
        )
    }
}
