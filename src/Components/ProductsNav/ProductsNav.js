import React from 'react'
import classes from './ProductsNav.module.scss'
import { NavLink } from 'react-router-dom';

const ProductsNav = props => (
    <ul className = {classes.products__nav}>
        <li><NavLink to = "/products/polosa" activeClassName = {classes.active}>Полоса</NavLink></li>
        <li><NavLink to = "/products/pokovka" activeClassName = {classes.active}>Поковка</NavLink></li>
        <li><NavLink to = "/products/kvadrat" activeClassName = {classes.active}>Квадрат</NavLink></li>
        <li><NavLink to = "/products/krug" activeClassName = {classes.active}>Круг</NavLink></li>
        <li><NavLink to = "/products/krug-blin" activeClassName = {classes.active}>Круг-блин</NavLink></li>
    </ul>
)

export default ProductsNav