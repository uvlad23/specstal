import React from 'react'
import classes from './Footer.module.scss'
import { NavLink } from 'react-router-dom';

const Footer = props =>{
    const year = new Date().getFullYear()
    return(
        <div className = {classes.footer}>
            <NavLink to="/" className={classes.logo__link}>
            <div className={classes.logo}>
                    <div className={classes.logo__pic}></div>
                    <div className={classes.logo__text}>СпецСталь
                    <div className={classes.line}></div>
                    </div>
                </div>
            </NavLink>
            <div className={classes.information}>
                <div className={classes.copyright}>ЧП “Спецсталь” © 2003-{year}</div>
                <div className={classes.imgs}>
                    <a href="https://hostiq.ua/wiki/ssl-certificate/" target="_blank" rel="noopener noreferrer"><img src={require('../../i/information/ssl-secure.png')} alt="" className = {classes.imgs__item}/></a>
                    <a href="https://novaposhta.ua/delivery" target="_blank" rel="noopener noreferrer"><img src={require('../../i/information/np.jpg')} alt="" className = {classes.imgs__item}/></a>
                    <a href="https://intime.ua/ua-calc" target="_blank" rel="noopener noreferrer"><img src={require('../../i/information/in-time.jpg')} alt="" className = {classes.imgs__item}/></a>
                    <a href="https://www.delivery-auto.com/ru-RU/CalculateCost" target="_blank" rel="noopener noreferrer"><img src={require('../../i/information/delivery-auto.png')} alt="" className = {classes.imgs__item}/></a>
                    <a href="https://www.sat.ua/ua/order/calculation/" target="_blank" rel="noopener noreferrer"><img src={require('../../i/information/sat.jpg')} alt="" className = {classes.imgs__item}/></a>
                </div>
            </div>
            <div className={classes.author}>Дизайн&Разработка:<br/><a href ='http://t.me/vladislav_ulyanenko'>Владислав Ульяненко</a></div>
            <div className={classes.contacts}>
                <div className={classes.contacts__address}><i className="fas fa-map-marker-alt"></i> ул.Войкова 58а. г. Никополь</div>
                <div className={classes.contacts__phone}><i className="fas fa-phone"></i> +380 (67) 632 47 85</div>
            </div>
        </div>
        
    )
}

export default Footer