import React, { Component } from 'react'
// import '../index.css'
import style from './StyleWithJSX.module.css';
export default class StyleWithJSX extends Component {
    render() {
        return (
            <div className='container'>
                <h3>StyleWithJSX</h3>
                <p className='text-red'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, tempora eaque deleniti deserunt amet numquam iusto ullam? Ad praesentium molestias itaque pariatur nisi maiores repudiandae autem laudantium soluta ex. Accusamus!</p>
                <h3 className={`p-2 bg-dark text-light ${style['text-blue']}`}>Hello frontend 28</h3>
                <hr />
                <div style={{ color: 'red', background: `url(https://picsum.photos/500/500)`, height: 500 }}>Hello cybetsoft!!! </div>
            </div>
        )
    }
}
