import React from 'react'
import classes from './Logo.module.scss'
import {NavLink} from 'react-router-dom'

const Logo = props =>{
    return(
        <NavLink to="/" className={classes.logo__link} aria-label = "Лого">
                    <div className={classes.logo}>
                            <div className={classes.logo__pic}></div>
                            <div className={classes.logo__text}>СпецСталь
                            <div className={classes.line}></div>
                            </div>
                    </div>
        </NavLink>
    )
}

export default Logo