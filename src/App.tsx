import { useEffect } from 'react'
import './App.css'
import UsersTable from './components/UsersTable'
import { useUserStore } from './store/useUserStore'
import ToggleBtn from './components/buttons/ToggleBtn'
import NormalBtn from './components/buttons/NormalBtn'

function App() {
	const { getUsers, resetUsers } = useUserStore()

	useEffect(() => {
		getUsers()
	}, [getUsers])

	return (
		<div className='App'>
			<h1>List Of Users</h1>
			<header>
				<ToggleBtn text='Color rows' propertyName='showColors' />
				<ToggleBtn text='Order by country' propertyName='orderByCountry' />
				<NormalBtn text='Reset Users' handleClick={resetUsers} />
			</header>
			<UsersTable />
		</div>
	)
}

export default App
