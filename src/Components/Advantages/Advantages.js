import React from 'react'
import classes from './Advantages.module.scss'

const Advantages = props =>{
    return(
        <div className = {classes.advantages}>
            <h2 className = {classes.advantages__title}>Наши преимущества</h2>
            <ul>
                <li>
                    <div className={classes.durable}></div>
                    <h3>Прочная сталь</h3>
                    <p>Качество метала подтверждается
                    химическим анализом в современной лаборотории
                    с европейским оборудованием</p>
                </li>
                <li className = {classes.mid__block}>
                    <div className={classes.delivery}></div>
                    <h3>Быстрая и удобная <br/>доставка</h3>
                    <p>Мы поддерживаем более 6 служб доставки и 
                    отгружаем товар в тот же день со склада</p>
                    <div className={classes.blue__line}></div>
                </li>
                <li>
                    <div className={classes.price}></div>
                    <h3>Выгодные цены</h3>
                    <p>Благодаря прямому сотрудничеству
                    с партнерами мы поддерживаем самые
                    выгодные цены</p>
                </li>
            </ul>
            
        </div>
        
    )
}

export default Advantages