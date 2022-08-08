import React, { Component } from 'react'
import '../assets/scss/style.scss'
const data = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./glassesImage/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./glassesImage/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./glassesImage/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./glassesImage/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./glassesImage/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./glassesImage/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./glassesImage/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./glassesImage/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
]

export default class BaiTapReactBuoi_2State extends Component {
    renderInfo = (prod) => {
        return <>
            <div className='avatar' key={prod.id}>
                <img src={prod.url} alt="" />
            </div>
            <div className='glassesInfo'>
                <h3>{prod.name}</h3>
                <p>{prod.desc}</p>
            </div>
        </>;

    };
    renderGlasses = () => {
        return data.map((prod, item) => {
            return <div className='item col-2 ' key={prod.id} onClick={() => {
                let tab = document.querySelector(".glassesInfo");
                tab.style.display = "block"
                this.setState({
                    prod: prod
                })
            }
            }>
                <img src={prod.url} alt="" />
            </div>;
        });
    }
    state = {
        // { this.renderInfo() }: ''
        prod: '',

    }
    render() {
        return (
            <div className='bg-react_buoi2' >
                <div className='top'>
                    <h1>TRY GLASSES APP ONLINE</h1>
                </div>
                <div className='container'>
                    <div className='model'>
                        <div className='model-left'>
                            <div className='avatar'>
                                <img src={this.state.prod.url} alt="" />
                            </div>
                            <div className='glassesInfo'>
                                <h3>{this.state.prod.name}</h3>
                                <p>{this.state.prod.desc}</p>
                            </div>
                        </div>
                        <div className='model_right'>

                            {/* <img src="../img/glassesImage/model.jpg" alt="" /> */}
                        </div>
                    </div>
                    <div className='list_item row'>
                        {/* <div className='item col-2 ' >
                            <img src="../img/glassesImage/g1.jpg" alt="" />
                        </div> */}
                        {this.renderGlasses()}
                    </div>
                </div>
            </div>
        )
    }
}

