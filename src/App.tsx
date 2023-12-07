import { useEffect } from 'react'
import './App.css'
import UsersTable from './components/UsersTable'
import { useUserStore } from './store/useUserStore'

function App() {
	const { users } = useUserStore()
	const { getUsers, toggleShowColors } = useUserStore()

	useEffect(() => {
		getUsers()
	}, [getUsers])

	return (
		<div className='App'>
			<h1>List Of Users</h1>
			<header>
				<button onClick={toggleShowColors}>Color rows</button>
			</header>
			<UsersTable users={users} />
		</div>
	)
}

export default App
