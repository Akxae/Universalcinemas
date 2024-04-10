import React from 'react'
import styles from './Footer1.module.css'

function Footer1({ navListData }) {

    return (
        <div className={styles.Footer1}>
            <h1>Universal Movies</h1>
            {navListData.map((item, index) => {
                if (index >= 1) {
                    return (
                        <ul key={item.id}>
                            <li >
                                {item.name}
                            </li>
                        </ul>
                    )
                }

            })}
        </div>
    )
}

export default Footer1
