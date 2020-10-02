import React, { useState } from 'react';

const Form = (props) => {
	const [charName, setCharName] = useState('');

	const handleSubmit = (event) => {
		console.log('handleSubmit clicked');
		event.preventDefault();
		props.handleSubmit(charName);
		setCharName('');
	};

	const handleChange = (event) => {
		console.log('handleChange clicked');
		const title = event.target.value;
		setCharName(title);
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor='charName'>Type a Name</label>
				<input
					id='charName'
					type='text'
					value={charName}
					onChange={handleChange}
				/>
				<input type='submit' value='Search' />
			</form>
		</>
	);
};

export default Form;
