import React from 'react'
import {Message} from "./Message";

const messageData = {
    avatar: 'https://cdn.mos.cms.futurecdn.net/H87432WX74XBos7aUqDmfP-1200-80.jpg',
    name: 'Александр',
    message: 'My first home work',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>


            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
