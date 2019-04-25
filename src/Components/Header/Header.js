import React from 'react'
import classes from './Header.module.scss'
import {NavLink} from 'react-router-dom'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

class Header extends React.Component{
    

    state = {
        isClicked:false
    }
    open() {
        this.menu.classList.toggle("show");
    }

    render(props){
        if (!this.props.isOffer){
            return(
                <div>                
                <div className = {classes.header}>
                    <div className= {classes.drawer_toggle}>
                        <DrawerToggleButton click = {this.props.drawerClickHandler}/>
                    </div>
                    <NavLink to="/" className={classes.logo__link}>
                    <div className={classes.logo}>
                            <div className={classes.logo__pic}></div>
                            <div className={classes.logo__text}>СпецСталь
                            <div className={classes.line}></div>
                            </div>
                        </div>
                    </NavLink>

                    <div>
                        <nav className={classes.menu}>
                            <NavLink to="/" exact activeClassName = {classes.active} className={classes.menu__item}><div>Главная</div></NavLink>
                            <NavLink to="/products" activeClassName = {classes.active} className={classes.menu__item}><div>Продукция</div></NavLink>
                            <NavLink to="/contact" activeClassName = {classes.active} className={classes.menu__item}><div>Контакты</div></NavLink>
                        </nav>
                    </div>
                    <NavLink to="/download" className={classes.download} activeClassName = {classes.active}><div>Скачать прайс <i className="fas fa-file-download"></i></div></NavLink>
                    <div className={classes.contacts}>
                        <div className={classes.contacts__address}><i className="fas fa-map-marker-alt"></i> ул.Войкова 58а. г. Никополь</div>
                        <div className={classes.contacts__phone}><i className="fas fa-phone"></i> +380 (67) 632 47 85</div>
                    </div>
                    <a className={classes.make_call} href="tel:+380676324785"><i className="fas fa-phone"></i></a>
                </div>
                <div className={classes.burger}>
                
                </div>
                </div> 
            )
        } else{
            return null
        }
    }
    
}

export default Header