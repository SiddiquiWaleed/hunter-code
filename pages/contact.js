import React from 'react';
import styles from '../styles/contact.module.css'
import {useState} from 'react';

const Contact = props => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [desc, setDesc] = useState('')
	
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = {phone, name, email, desc}
		debugger;
		fetch('http://localhost:3000/api/postcontact', {
		  method: 'POST',
		  body: JSON.stringify(data),
		  headers: {
		    'Content-type': 'application/json; charset=UTF-8',
		  },
		})
   .then((response) => response.text())
   .then((data) => {
      setName('');
      setEmail('');
      setPhone('');
      setDesc('');
      // Handle data
   })
   .catch((err) => {
      console.log(err.message);
   });
	}

	const handleChange = (e) => {
		if(e.target.name == 'name') {
			setName(e.target.value);
		}
		else if(e.target.name == 'email') {
			setEmail(e.target.value);
		}
		else if(e.target.name == 'phone') {
			setPhone(e.target.value);
		}
		else if (e.target.name == 'desc') {
			setDesc(e.target.value);
		}
	}

	return (
		<div className={styles.container}>
			<h1>Contact Us</h1>
			<form 
				onSubmit= {handleSubmit}
			>
			  <div className={styles.form}>
			    <label htmlFor="name">Name</label>
			    <input type="text" value={name} onChange={handleChange} className="form-control" id="name" name="name" aria-describedby="emailHelp" placeholder="Enter name" />
			  </div>
			  <div className={styles.form}>
			    <label htmlFor="email">Email address</label>
			    <input type="email" value={email} onChange={handleChange} className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
			  </div>
			  <div className={styles.form}>
			    <label htmlFor="phone">Phone</label>
			    <input type="phone" value={phone} onChange={handleChange} className="form-control" id="phone" name="phone" placeholder="Phone No" />
			  </div>
			  <div className={styles.form}>
			  	<label htmlFor="desc">Review</label>
			    <textarea name="desc" value={desc} onChange={handleChange} className="form-control" placeholder="Leave a review here" aria-label="With textarea" id="desc" />
			  </div>
			  <button type="submit" className="btn btn-primary">Submit</button>
			</form>
		</div>
	)
}

export default Contact;