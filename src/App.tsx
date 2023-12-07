import { useEffect } from 'react'
import './App.css'
import UsersTable from './components/UsersTable'
import { useUserStore } from './store/useUserStore'

function App() {
	const { getUsers, toggleShowColors, toggleOrderByCountry } = useUserStore()

	useEffect(() => {
		getUsers()
	}, [getUsers])

	return (
		<div className='App'>
			<h1>List Of Users</h1>
			<header>
				<button onClick={toggleShowColors}>Color rows</button>
				<button onClick={toggleOrderByCountry}>Order by country</button>
			</header>
			<UsersTable />
		</div>
	)
}

export default App
