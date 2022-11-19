import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import { useState, useEffect } from 'react';

const slug = props => {
	// const [blog, setBlog] = useState('');
	const router = useRouter();
	let data;
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div>
					<h1>{props.data && props.data.title}</h1>
					<hr />
					<div className={styles.description}>
						{ props.data && props.data.body}
					</div>
				</div>
			</main>
		</div>
	)
}

export async function getServerSideProps(props) {
  // Fetch data from external API
  const {slug} = props.query;
  console.log({slug});
  const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  const data = await res.json();
  return { props: { data } };
}


export default slug