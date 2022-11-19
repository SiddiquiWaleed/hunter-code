import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link';


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/blogs`);
  const data = await res.json();
  return { props: { data } };
}
const Blogs = props => {
	return (
		<div>
      <main className={styles.main}>
	      <h2>Latest Blogs</h2>
	      <ul className={styles.blogposts}>
	      	{props.data &&
          props.data.map((blogitem) => (
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