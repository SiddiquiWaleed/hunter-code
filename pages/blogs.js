import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const Blogs = props => {
	return (
		<div>
      <main className={styles.main}>
	      <h2>Latest Blogs</h2>
	      <ul className={styles.blogposts}>
	        <li>
	          <Link href='/blogpost/learn-javascript'>
		          <h3 className={styles.blogpost}>
		            How to learn Javascript in 2022?
		          </h3>
	          </Link>
	          <p>Javascript is a language used to build logic for webapps</p>
	        </li>
	        <li>
	          <Link href='/blogpost/learn-javascript'>
		          <h3 className={styles.blogpost}>
		            How to learn Javascript in 2022?
		          </h3>
	          </Link>
	          <p>Javascript is a language used to build logic for webapps</p>
	        </li>
	        <li>
	          <Link href='/blogpost/learn-javascript'>
		          <h3 className={styles.blogpost}>
		            How to learn Javascript in 2022?
		          </h3>
	          </Link>
	          <p>Javascript is a language used to build logic for webapps</p>
	        </li>
	      </ul>
    	</main>
		</div>
	)
}

export default Blogs