import React from 'react'
import classes from './Products.module.scss'
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    disable: function() {
      return /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
    }
});

const Products = props => {
    return(
        <div className = {classes.products}>
            <h2 data-aos="fade-in" data-aos-duration="2000">Продукция</h2>
            <ul className = {classes.products__list}>
                <li data-aos="slide-up" data-aos-duration="1000">
                    <h3>Круг</h3>
                    <div className={classes.products__link}>
                    <img src={require('../../i/products/krug.jpg')} alt="Круг" className = {classes.products__image}/>
                    <div className={classes.products__overlay}>
                        <NavLink to='/products/krug' className={classes.products__button} aria-label = "Купить">Купить</NavLink>
                    </div>
                    </div>
                </li>
                <li data-aos="slide-up" data-aos-duration="1000">
                    <h3>Полоса</h3>
                    <div className={classes.products__link}>
                        <img src={require('../../i/products/polosa.jpg')} alt="Полоса" className = {classes.products__image}/>
                        <div className={classes.products__overlay}>
                            <NavLink to='/products' className={classes.products__button} aria-label = "Купить">Купить</NavLink>
                        </div>
                    </div>
                </li>
                <li data-aos="slide-up" data-aos-duration="1000">
                    <h3>Квадрат</h3>
                    <div className={classes.products__link}>
                        <img src={require('../../i/products/kvadrat.jpg')} alt="Квадрат" className = {classes.products__image}/>
                        <div className={classes.products__overlay}>
                            <NavLink to='/products/kvadrat' className={classes.products__button} aria-label = "Купить">Купить</NavLink>
                        </div>
                    </div>
                </li>
                <li data-aos="slide-up" data-aos-duration="1000">
                    <h3>Поковка</h3>
                    <div className={classes.products__link}>
                        <img src={require('../../i/products/pokovka.jpg')} alt="Поковка" className = {classes.products__image}/>
                        <div className={classes.products__overlay}>
                            <NavLink to='/products/pokovka' className={classes.products__button} aria-label = "Купить">Купить</NavLink>
                        </div>
                    </div>
                </li>
                <div className={classes.white__line}></div>
            </ul>
        </div>
    )
}

export default Products