import './App.css'
import UsersTable from './components/UsersTable'
import { useUserStore } from './store/useUserStore'
import ToggleBtn from './components/buttons/ToggleBtn'
import NormalBtn from './components/buttons/NormalBtn'
import useFetchUsers from './hooks/useFetchUsers'

function App() {
	const { originalUsers, loading, error } = useFetchUsers()
	const { setUsers } = useUserStore()

	const handleReset = () => {
		setUsers(originalUsers)
	}

	return (
		<div className='App'>
			<h1>List Of Users</h1>
			<header>
				<ToggleBtn text='Color rows' propertyName='showColors' />
				<ToggleBtn text='Order by country' propertyName='orderByCountry' />
				<NormalBtn text='Reset Users' handleClick={handleReset} />
			</header>
			{loading && <p>Loading...</p>}
			{!loading && !error && <UsersTable />}
		</div>
	)
}

export default App
