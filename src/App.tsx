import { useEffect, useState } from 'react'
import './App.css'
import { User } from './types/types'
import UsersTable from './components/UsersTable'

function App() {
	const [users, setUsers] = useState<User[]>([])

	useEffect(() => {
		fetch('https://randomuser.me/api/?results=100')
			.then((response) => response.json())
			.then((data) => setUsers(data.results))
			.catch((error) => console.error(error))
	}, [])

	return (
		<div className='App'>
			<h1>List Of Users</h1>
			<UsersTable users={users} />
		</div>
	)
}

export default App
