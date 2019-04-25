import React from 'react'
import classes from './SideDrawer.module.scss'
import { NavLink } from 'react-router-dom';

const SideDrawer = props =>{
    let drawerClasses = [classes.side_drawer]
    if(props.show){
        drawerClasses = [classes.side_drawer, classes.open]
    }
    return(
    <nav className = {drawerClasses.join(' ')}>
        <nav>
        <NavLink to="/" exact activeClassName = {classes.active} className={classes.menu__item}><div>Главная</div></NavLink>
        <NavLink to="/products" activeClassName = {classes.active} className={classes.menu__item}><div>Продукция</div></NavLink>
        <NavLink to="/contact" activeClassName = {classes.active} className={classes.menu__item}><div>Контакты</div></NavLink>
        <NavLink to="/download" className={classes.download} activeClassName = {classes.active}><div>Скачать прайс <i className="fas fa-file-download"></i></div></NavLink>
        </nav>
    </nav>)
}

export default SideDrawer