import React from 'react'
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";


function Header() {
    return (
        <div className={s.accordion}>
            {/*// add NavLinks*/}
            <span ><NavLink className={s.first} to='/pre-junior'>pre junior </NavLink></span>
            <span ><NavLink to='junior' className={s.second}>junior </NavLink></span>
            <span ><NavLink to='junior+' className={s.three}>junior+ </NavLink></span>
        </div>

    )
}

export default Header
