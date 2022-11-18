import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link';
import { useState, useEffect } from 'react';


const Blogs = props => {
	const [item, setItem] = useState('');
  useEffect(() => {
 fetch(`http://localhost:3000/api/blogs`)
  .then((response) => response.json())
  .then((actualData) => {
  	setItem(actualData);
  })
  .catch((err) => {
   console.log(err.message);
  });
}, []);
	return (
		<div>
      <main className={styles.main}>
	      <h2>Latest Blogs</h2>
	      <ul className={styles.blogposts}>
	      	{item &&
          item.map((blogitem) => (
            <li key={blogitem.title}>
              <Link href={`/blogpost/${blogitem.slug}`}><h3>{blogitem.title}</h3></Link>
              <p>{blogitem.body}</p>
            </li>
          ))}
	      </ul>
    	</main>
		</div>
	)
}

export default Blogs;