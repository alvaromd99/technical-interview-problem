import { useEffect } from 'react'
import './App.css'
import UsersTable from './components/UsersTable'
import { useUserStore } from './store/useUserStore'
import Button from './components/btn/Button'

function App() {
	const { getUsers, toggleShowColors, toggleOrderByCountry } = useUserStore()

	useEffect(() => {
		getUsers()
	}, [getUsers])

	return (
		<div className='App'>
			<h1>List Of Users</h1>
			<header>
				<Button text='Color rows' handleClick={toggleShowColors} />
				<Button text='Order by country' handleClick={toggleOrderByCountry} />
			</header>
			<UsersTable />
		</div>
	)
}

export default App
