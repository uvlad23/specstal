import React from 'react'
import classes from './Offer.module.scss'
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    disable: function() {
      return /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
    }
});

const Offer = props =>{
    return(
        <div className={classes.offer}>
        <h1 className={classes.offer__title} data-aos="fade-right" data-aos-duration="1000">Инструментальная сталь</h1>
        <p className={classes.offer__text} data-aos="fade-right" data-aos-duration="1000">Купи у надежного поставщика с доставкой<br/>
        по всей Украине и отгрузкой в тот же день</p>
        <div className={classes.offer__btn} data-aos="fade-right" data-aos-duration="1000"><NavLink to="/products" aria-label = "Купить">Узнать больше</NavLink></div>
        </div>
    )
}

export default Offer
