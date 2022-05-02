import { useState } from 'react'
import Contact from '../Contact'
import Form from '../Form'

function List() {
	const [contactList, setContactList] = useState([])

	const addNewContact = contact => setContactList([...contactList, contact])

	const toggleConnected = ({ id, connected }) => {
		return contactList.map(contact =>
			id === contact.id ? { ...contact, connected } : contact
		)
	}

	const deleteContact = id => {
		const contactRemoved = contactList.filter(contact => contact.id !== id)
		setContactList(contactRemoved)
	}

	return (
		<div>
			<Form addContact={addNewContact} />
			{contactList.length === 0 ? (
				<p>Not contacts</p>
			) : (
				<section>
					{contactList.map(contactInfo => (
						<Contact
							contactInfo={contactInfo}
							key={contactInfo.id}
							delContact={deleteContact}
							toggle={toggleConnected}
						/>
					))}
				</section>
			)}
		</div>
	)
}

export default List
