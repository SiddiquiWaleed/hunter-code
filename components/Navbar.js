import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Navbar = props => {
	return (
		<nav>
      <ul className={styles.navbar}>
        <Link href="/">
        <li className={styles.navlist}>
          Home
        </li></Link>
        <Link href="/about">
        <li className={styles.navlist}>
          About Us
        </li>
        </Link>
        <Link href="/contact">
        <li className={styles.navlist}>
          Contact
        </li>
        </Link>
        <Link href="/blogs">
        <li className={styles.navlist}>
          Blogs
        </li>
        </Link>
      </ul>
    </nav>
	)
}

export default Navbar