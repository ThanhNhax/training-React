import React, { Component } from 'react'
import BaiTapThucHanhLayoutBody from './BaiTapThucHanhLayoutBody'
import BaiTapThucHanhLayoutFooter from './BaiTapThucHanhLayoutFooter'
import BaiTapThucHanhLayoutHeader from './BaiTapThucHanhLayoutHeader'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <>
                <BaiTapThucHanhLayoutHeader />
                <BaiTapThucHanhLayoutBody>
                </BaiTapThucHanhLayoutBody>
                <BaiTapThucHanhLayoutFooter />
            </>
        )
    }
}
