import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link';
import { useState, useEffect } from 'react';


const Blogs = props => {
	const [item, setItem] = useState('');
  useEffect(() => {
  	console.log('useeffect');
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
          item.map((i) => (
            <li key={i.title}>
              <h3>{i.title}</h3>
              <p>{i.body}</p>
            </li>
          ))}
	      </ul>
    	</main>
		</div>
	)
}

export default Blogs