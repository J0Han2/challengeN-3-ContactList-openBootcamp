import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { ContactInfo } from '../../models'

function Contact({ contactInfo, delContact, toggle }) {
	const { email, firstName, lastName, id } = contactInfo
	const [connected, setConnected] = useState(false)

	const handleConnected = () => setConnected(!connected)

	const handleDelete = () => delContact(id)

	useEffect(() => {
		toggle({ id, connected })
	}, [connected, toggle, id])

	return (
		<li>
			<div>
				<span>{firstName}</span>
				<span>{lastName}</span>
			</div>
			<p>{email}</p>
			<button onClick={handleConnected}>
				{connected ? 'online 🟢' : 'offline 🔴'}
			</button>
			<button onClick={handleDelete}>❌</button>
		</li>
	)
}

export default Contact

Contact.propTypes = {
	contactInfo: PropTypes.instanceOf(ContactInfo),
	delContact: PropTypes.func,
	toggle: PropTypes.func,
}
