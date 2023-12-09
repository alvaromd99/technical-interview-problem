import { useEffect } from 'react'
import './App.css'
import UsersTable from './components/UsersTable'
import { useUserStore } from './store/useUserStore'
import Button from './components/btn/Button'

function App() {
	const { getUsers } = useUserStore()

	useEffect(() => {
		getUsers()
	}, [getUsers])

	return (
		<div className='App'>
			<h1>List Of Users</h1>
			<header>
				<Button text='Color rows' propertyName='showColors' />
				<Button text='Order by country' propertyName='orderByCountry' />
			</header>
			<UsersTable />
		</div>
	)
}

export default App
