import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import { useState, useEffect } from 'react';

const slug = props => {
	const [blog, setBlog] = useState('');
	const router = useRouter();
  useEffect(() => {
  if(!router.isReady) return
  const {slug} = router.query;
	 fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
	  .then((response) => response.json())
	  .then((actualData) => {
	  	setBlog(actualData);
	  })
	  .catch((err) => {
	   console.log(err.message);
	  });
	}, [router.isReady]);
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div>
					<h1>{blog && blog.title}</h1>
					<hr />
					<div className={styles.description}>
						{ blog && blog.body}
					</div>
				</div>
			</main>
		</div>
	)
}


export default slug