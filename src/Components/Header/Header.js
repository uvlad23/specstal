import React from 'react'
import classes from './Header.module.scss'
import {NavLink} from 'react-router-dom'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Logo from '../Logo/Logo'

class Header extends React.Component{
    

    state = {
        isClicked:false
    }
    open() {
        this.menu.classList.toggle("show");
    }
    
    // componentDidMount(){
    //     let header = document.getElementById("header");
    //     let sticky = header.offsetTop;
    //     window.onscroll = () => {
    //         if (window.pageYOffset > sticky) {
    //             header.classList.add(classes.sticky);
    //           } else {
    //             header.classList.remove(classes.sticky);
    //           }
    //     }
    // };
    
    headerScrollHandler(){
        
    }

    render(props){
        if (!this.props.isOffer){
            return(
                <div>                
                <div className = {classes.header} id = "header">
                    <div className= {classes.drawer_toggle}>
                        <DrawerToggleButton click = {this.props.drawerClickHandler}/>
                    </div>

                    <Logo/>

                    <div>
                        <nav className={classes.menu}>
                            <NavLink to="/" exact activeClassName = {classes.active} className={classes.menu__item} aria-label = "Главная"><div>Главная</div></NavLink>
                            <NavLink to="/products" activeClassName = {classes.active} className={classes.menu__item} aria-label = "Продукция"><div>Продукция</div></NavLink>
                            <NavLink to="/contact" activeClassName = {classes.active} className={classes.menu__item} aria-label = "Контакты"><div>Контакты</div></NavLink>
                        </nav>
                    </div>
                    <a href="https://firebasestorage.googleapis.com/v0/b/specstal-backend.appspot.com/o/%D0%9F%D1%80%D0%B0%D0%B9%D1%81.xls?alt=media&token=bfbe7e4b-0f99-41e1-8d1e-014f27571761" className={classes.download}  aria-label = "Скачать прайс"><div>Скачать прайс <i className="fas fa-file-download"></i></div></a>
                    <div className={classes.contacts}>
                        <div className={classes.contacts__address}><i className="fas fa-map-marker-alt"></i> ул.Войкова 58а. г. Никополь</div>
                        <div className={classes.contacts__phone}><i className="fas fa-phone"></i> +380 (67) 632 47 85</div>
                    </div>
                    <a className={classes.make_call} href="tel:+380676324785" aria-label = "Позвонить"><i className="fas fa-phone"></i></a>
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