import React from 'react'
import classes from './ProductsNav.module.scss'
import { NavLink } from 'react-router-dom';

const ProductsNav = props => (
    <ul className = {classes.products__nav}>
        <li><NavLink to = "/products/polosa" activeClassName = {classes.active} className = {classes.products__nav__item}>Полоса</NavLink></li>
        <li><NavLink to = "/products/pokovka" activeClassName = {classes.active} className = {classes.products__nav__item}>Поковка</NavLink></li>
        <li><NavLink to = "/products/kvadrat" activeClassName = {classes.active} className = {classes.products__nav__item}>Квадрат</NavLink></li>
        <li><NavLink to = "/products/krug" activeClassName = {classes.active} className = {classes.products__nav__item}>Круг</NavLink></li>
        <li><NavLink to = "/products/krug-blin" activeClassName = {classes.active} className = {classes.products__nav__item}>Круг-блин</NavLink></li>
    </ul>
)

export default ProductsNav