import React, { Component } from 'react'
import ProductCard from './ProductCard'
const data = [
    { id: 1, name: 'Quân', age: 20 },
    { id: 2, name: 'Quân3', age: 24 },
    { id: 3, name: 'Quâ33', age: 23 }
]
export default class DemoProps extends Component {
    renderPerson = () => {
        return data.map((person, index) => {
            return <div className='col-3' key={index}>
                <ProductCard item={person} />
            </div>
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    {this.renderPerson()}
                </div>
            </div>
        )
    }
}
