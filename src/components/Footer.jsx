import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import styles from '../components/Footer.module.css'
import logo from '../images/logo.png'
import { FaInstagram,FaFacebook } from 'react-icons/fa'


function Footer() {
  return (
  <><footer className={styles.footer}>

    <div className={styles.logo}><img src={logo} alt='logo'></img></div>
    <div className={styles.social}>
    <a className={styles.insta} href='#' > <FaInstagram/></a>
    <a className={styles.face} href='#'><FaFacebook/></a>
    </div>


  </footer></>
    
  )
}

export default Footer
