import React from 'react'
// import * as url from "url";
import s from './Message.module.css'

type propsTitle = {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message = (props: propsTitle) => {
    return (
        <div className={s.osn}>
            <img src={props.avatar} alt="Изображение пользователя"/>

            <div className={s.messageBlock}>
                <p className={s.names}>{props.name}</p>
                <p className={s.text}>{props.message}</p>
                <p className={s.time}>{props.time}</p>
            </div>

        </div>
    )
}


