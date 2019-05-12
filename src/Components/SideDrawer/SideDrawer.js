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
        <a href="https://firebasestorage.googleapis.com/v0/b/specstal-backend.appspot.com/o/%D0%9F%D1%80%D0%B0%D0%B9%D1%81.xls?alt=media&token=bfbe7e4b-0f99-41e1-8d1e-014f27571761" className={classes.download} ><div>Скачать прайс <i className="fas fa-file-download"></i></div></a>
        </nav>
    </nav>)
}

export default SideDrawer