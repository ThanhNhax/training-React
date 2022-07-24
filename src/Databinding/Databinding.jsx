import React, { Component } from 'react'

export default class Databinding extends Component {
    product = {
        id: 1,
        name: 'product 1',
        price: 1000,
        img: 'https://i.pravatar.cc?u=8'
    }

    renderCardProduct = () => {
        //Nội dung render phaiir là: string, boolean, number hoặc jsx (có thẻ bao phur)
        return (
            <div className='card'>
                <img src={this.product.img} alt="..." />
                <div className='card-body bg-dark text-white'>
                    <p>{this.product.name}</p>
                    <p>{this.product.price}</p>
                </div>
            </div>

        )
    }
    render() {
        const title = 'Cybersoft';
        const person = {
            name: 'mr.dam',
            age: 25,
        }
        const renderText = (tenlop) => {
            return `hello ${tenlop}`;
        }
        return (
            <div className='container'>
                <p id='pText'>{title}</p>
                <hr />
                <div className='card w-25 mt-2'>
                    <img src="https://i.pravatar.cc?u=1" alt="..." />
                    <div className='card-body'>
                        <p>name: {person.name}</p>
                        <p>age: {person.age}s</p>
                    </div>
                </div>
                <hr />
                <h3>Binding gọi hàm: Chỗ gọi hàm sẽ hiển thị những gì mà hàm đó return . {`{goiHam()}`}</h3>
                {renderText('BC28')}
                <hr />
                <div className='alert alert-primary'>
                    Product info:
                    <p>id: {this.product.id}</p>
                    <p>name: {this.product.name}</p>
                    <img src={this.product.img} alt="" width={200} />
                    <p>price: {this.product.price}</p>
                </div>
                <hr />
                <h3>Card Product</h3>
                <div className='w-25'>
                    {this.renderCardProduct()};
                </div>
            </div>
        )
    }
}
