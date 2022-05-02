export default class Contact {
	email = ''
	connected = false
	firstName = ''
	lastName = ''
	id = null

	constructor(connected, email, firstName, id, lastName) {
		this.connected = connected
		this.email = email
		this.firstName = firstName
		this.lastName = lastName
		this.id = id
	}
}
