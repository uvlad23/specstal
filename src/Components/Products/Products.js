import React from 'react'
import classes from './Products.module.scss'

const Products = props => {
    return(
        <div className = {classes.products}>
            <h2>Продукция</h2>
            <ul className = {classes.products__list}>
                <li>
                    <h3>Круг</h3>
                    <img src={require('../../i/products/krug.png')} alt=""/>
                </li>
                <li>
                    <h3>Полоса</h3>
                    <img src={require('../../i/products/polosa.png')} alt=""/>
                </li>
                <li>
                    <h3>Квадрат</h3>
                    <img src={require('../../i/products/kvadrat.png')} alt=""/>
                </li>
                <li>
                    <h3>Поковка</h3>
                    <img src={require('../../i/products/pokovka.png')} alt=""/>
                </li>
                <div className={classes.white__line}></div>
            </ul>
        </div>
    )
}

export default Products