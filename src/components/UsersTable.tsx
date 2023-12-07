import { useUserStore } from '../store/useUserStore'
import { User } from '../types/types'

export default function UsersTable() {
	const { users, showColors, orderByCountry } = useUserStore()

	const usersToShow: User[] = orderByCountry
		? [...users].sort(
				(a, b) => a.location.country.localeCompare(b.location.country)
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  )
		: users

	return (
		<table className='table'>
			<thead>
				<tr>
					<th>Photo</th>
					<th>Name</th>
					<th>Last Name</th>
					<th>Country</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody className={`${showColors ? 'colored' : ''}`}>
				{usersToShow.map((user) => {
					const uniqueId = crypto.randomUUID()
					return (
						<tr key={uniqueId}>
							<td className='image-cell'>
								<img
									src={user.picture.thumbnail}
									alt={`${user.name.first} Photo`}
								/>
							</td>
							<td>{user.name.first}</td>
							<td>{user.name.last}</td>
							<td>{user.location.country}</td>
							<td>
								<button>Delete</button>
							</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
