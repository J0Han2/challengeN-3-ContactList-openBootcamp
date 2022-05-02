import PropTypes from 'prop-types'
import { useState } from 'react'
import generatorID from '../../constants/generatorID'
import { ContactInfo } from '../../models'

const initialContactInfo = {
	firstName: '',
	lastName: '',
	contactEmail: '',
}

function Form({ addContact }) {
	const [contactInfo, setContactInfo] = useState(initialContactInfo)
	const { firstName, lastName, contactEmail } = contactInfo

	const handleSubmit = e => {
		e.preventDefault()
		if (
			firstName.trim() === '' ||
			lastName.trim() === '' ||
			contactEmail.trim() === ''
		) {
			return null
		}

		const id = generatorID()
		const contact = new ContactInfo(
			false,
			`${contactEmail}@hotmail.com`,
			firstName,
			id,
			lastName
		)
		addContact(contact)
		setContactInfo(initialContactInfo)
	}

	const handleChange = e => {
		const { name, value } = e.target
		setContactInfo({ ...contactInfo, [name]: value })
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				name='firstName'
				placeholder='First Name...'
				type='text'
				value={firstName}
				onChange={handleChange}
			/>
			<input
				name='lastName'
				placeholder='Last Name ...'
				type='text'
				value={lastName}
				onChange={handleChange}
			/>
			<input
				type='email'
				name='contactEmail'
				value={contactEmail}
				onChange={handleChange}
			/>
			<button type='submit'>Add Contact</button>
		</form>
	)
}

Form.propTypes = {
	addContact: PropTypes.func,
}

export default Form
