import { useState } from 'react'
import Form from '../Form'
import Contact from '../Contact'
import { ContainerList } from './ListStyles'

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
		<ContainerList>
			<Form addContact={addNewContact} />
			{contactList.length === 0 ? (
				<p className='message-default'>Not contacts</p>
			) : (
				<ul>
					{contactList.map(contactInfo => (
						<Contact
							contactInfo={contactInfo}
							key={contactInfo.id}
							delContact={deleteContact}
							toggle={toggleConnected}
						/>
					))}
				</ul>
			)}
		</ContainerList>
	)
}

export default List
