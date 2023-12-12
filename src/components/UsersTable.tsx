import { useMemo } from 'react'
import { useUserStore } from '../store/useUserStore'

export default function UsersTable() {
	const { users, showColors, orderByCountry, filterCountry } = useUserStore()
	const { deleteUser } = useUserStore()

	const filteredUsers = useMemo(() => {
		return filterCountry !== ''
			? users.filter(
					(user) =>
						user.location.country
							.toLowerCase()
							.includes(filterCountry.toLowerCase())
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  )
			: users
	}, [users, filterCountry])

	const sortedUsers = useMemo(() => {
		return orderByCountry
			? filteredUsers.toSorted(
					(a, b) => a.location.country.localeCompare(b.location.country)
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  )
			: filteredUsers
	}, [filteredUsers, orderByCountry])

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
				{sortedUsers.map((user) => {
					return (
						<tr key={user.login.uuid}>
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
								<button
									className='btn action-btn'
									onClick={() => deleteUser(user.login.uuid)}>
									Delete
								</button>
							</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
