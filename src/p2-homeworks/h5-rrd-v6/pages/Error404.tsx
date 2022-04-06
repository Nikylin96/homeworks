import React from 'react'
import s from "./Eror404.module.css";

function Error404() {
    return (
        <div className={s.block}>
            <div className={s.numbers}>404</div>
            <div className={s.strings}>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
