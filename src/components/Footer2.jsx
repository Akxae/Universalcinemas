import React from 'react'
import styles from './Footer2.module.css'

function Footer2() {

    const supportdata=[
        {id:'01',support:'Help Center'},
        {id:'02',support:'Terms of Use'},
        {id:'03',support:'Privacy Policy'},
        {id:'04',support:'Content Complaints'},
    ]

  return (
    <div className={styles.footer2}>
        <h1>Support</h1>
        {
            supportdata.map((item)=>{
                return (
                    <ul key={item.id}>
                        <li>
                            {item.support}
                        </li>
                    </ul>
                )
            })
        }
    </div>
  )
}

export default Footer2
