import React from 'react'
import classes from './Offer.module.scss'

const Offer = props =>{
    return(
        <div className={classes.offer}>
        <h1 className={classes.offer__title}>Инструментальная сталь</h1>
        <p className={classes.offer__text}>Купи у надежного поставщика с доставкой<br/>
        по всей Украине и отгрузкой в тот же день</p>
        <div className={classes.offer__btn}><a href="#">Узнать больше</a></div>
        </div>
    )
}

export default Offer