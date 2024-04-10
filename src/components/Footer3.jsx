import React from 'react'
import styles from './Footer3.module.css'

function Footer3() {

  const icons = [
    { id: '01', name: <i className="ri-facebook-circle-fill"></i> },
    { id: '02', name: <i className="ri-twitter-x-fill"></i> },
    { id: '03', name: <i className="ri-instagram-fill"></i> },
  ]

  return (
    <div className={styles.footer3}>
      <h1>Connect With us</h1>
      <div className={styles.icons}>
        {
          icons.map((icon) => {
            return (
              <div key={icon.id} className={styles.iconcontainer}>{icon.name}</div>
            )
          })
        }
      </div>


    </div>
  )
}

export default Footer3
