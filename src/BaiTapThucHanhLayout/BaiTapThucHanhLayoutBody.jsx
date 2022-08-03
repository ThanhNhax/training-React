import React, { Component } from 'react'
import BaiTapThucHanhLayoutBanner from './BaiTapThucHanhLayoutBanner'
import BaiTapThucHanhLayoutItem from './BaiTapThucHanhLayoutItem'

export default class BaiTapThucHanhLayoutBody extends Component {
    render() {
        return (<>
            <section className="pt-4">
                <div className="container px-lg-5">
                    {/* Page Features*/}
                    <BaiTapThucHanhLayoutBanner />
                </div>
            </section>
            <section className="pt-4">
                <div className="container px-lg-5">
                    <BaiTapThucHanhLayoutItem />

                </div>
            </section>
        </>
        )
    }
}
