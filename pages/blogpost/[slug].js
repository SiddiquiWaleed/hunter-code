import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css'

const slug = props => {
	const router = useRouter();
  const {slug} = router.query;
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div>
					<h1>Title of the page { slug }</h1>
					<hr />
					<div className={styles.description}>
						Description of blog
					</div>
				</div>
			</main>
		</div>
	)
}


export default slug