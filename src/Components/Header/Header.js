import React from 'react'
import classes from './Header.module.scss'

const Header = props =>{
    //document.getElementById("trigger").onclick = function() {open()};

    // function open() {
    //     document.getElementById("menu").classList.toggle("show");
    // }
    return(
        <div className = {classes.header}>
            <a href="#" className={classes.logo__link}>
            <div className={classes.logo}>
                    <div className={classes.logo__pic}></div>
                    <div className={classes.logo__text}>СпецСталь
                    <div className={classes.line}></div>
                    </div>
                </div>
            </a>
            <div className={classes.nav}>
            <span id="trigger" className={classes.trigger}>
                <i></i>
                <i></i>
                <i></i>
            </span>
                <ul className={classes.menu}>
                    <a href="#"><li>Главная</li></a>
                    <a href="#"><li>Продукция</li></a>
                    <a href="#"><li>Контакты</li></a>
                    <a href="#" className={classes.download}><div>Скачать прайс <i className="fas fa-file-download"></i></div></a>
                </ul>
            </div>
            
            <div className={classes.contacts}>
                <div className={classes.contacts__address}><i className="fas fa-map-marker-alt"></i> ул.Войкова 58а. г. Никополь</div>
                <div className={classes.contacts__phone}><i className="fas fa-phone"></i> +380 (67) 632 47 85</div>
            </div>
        </div>
    )
}

export default Header