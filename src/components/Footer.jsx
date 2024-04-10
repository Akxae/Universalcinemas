import React from 'react'
import styles from './Footer.module.css'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import Footer3 from './Footer3'
import navListData from '../Data/NavlistData'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footercontainer}>
                <div className={styles.footerleft}>
                    <Footer1 navListData={navListData} />
                    <Footer2 />
                </div>
                <div className={styles.footerright}>
                    <Footer3 />
                </div>
            </div>
        </footer>
    )
}

export default Footer
