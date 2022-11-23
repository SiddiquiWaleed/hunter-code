import React from 'react';
import styles from '../styles/about.module.css';

const About = props => {
	const testData = () => {
		let l = 2;
		let r = 7;
		for(l; l<=r; l++){
		  // let's divide the value by 2
		  // if the remainder is not a zero then it's an odd number
		 
		  if(l % 2 != 0){
		  	debugger;
		      let arr = [];
		        arr.push(l);
		    return arr;
		  }
		}
	}
	return (
		<div className={styles.container}>
			<h1 onClick = {testData} className={styles.center}>About Hunting Coder</h1>
			<h2>Introduction</h2>
			<p>Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Inventore ipsa ea voluptatem harum facere similique porro, nam, a, labore enim itaque nemo. Quisquam debitis, autem fuga temporibus odit blanditiis? Enim.</p>
			<h2>Services Offered</h2>
			<p>Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Ipsa, quasi. Dolorum est nam ab, suscipit quos eos ducimus dolores consequatur consequuntur at, et, vel ut dignissimos laborum veniam exercitationem a?</p>
			<h2>Contact Us</h2>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis cumque, beatae id iure odit reiciendis aliquam exercitationem, assumenda voluptas. Animi incidunt natus fugit veritatis officiis, tempora vitae totam quos commodi.</p>
		</div>
	)
}


export default About;