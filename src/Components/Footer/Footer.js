import React from 'react'
import classes from './Footer.module.scss'

const Footer = props =>{
    const year = new Date().getFullYear()
    return(
        <div className = {classes.footer}>
            <a href="#" className={classes.logo__link}>
            <div className={classes.logo}>
                    <div className={classes.logo__pic}></div>
                    <div className={classes.logo__text}>СпецСталь
                    <div className={classes.line}></div>
                    </div>
                </div>
            </a>
            <div className={classes.information}>
                <div className={classes.copyright}>ЧП “Спецсталь” © 2003-{year}</div>
                <div className={classes.imgs}>
                    <img src={require('../../i/information/ssl-secure.png')} alt="" className = {classes.imgs__item}/>
                    <img src={require('../../i/information/np.jpg')} alt="" className = {classes.imgs__item}/>
                    <img src={require('../../i/information/in-time.jpg')} alt="" className = {classes.imgs__item}/>
                    <img src={require('../../i/information/delivery-auto.png')} alt="" className = {classes.imgs__item}/>
                    <img src={require('../../i/information/sat.jpg')} alt="" className = {classes.imgs__item}/>
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