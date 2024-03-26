import React from 'react'
import './Hero.css'

const Button = ({butlist}) => {
    return (
        <>
            <button className="mainButton">{butlist.buttonname}</button>
        </>
    )
}

export default Button
