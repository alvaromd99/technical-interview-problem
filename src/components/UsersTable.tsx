import { useUserStore } from '../store/useUserStore'
import { User } from '../types/types'

interface Props {
	users: User[]
}

export default function UsersTable({ users }: Props) {
	const { showColors } = useUserStore()

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
				{users.map((user) => {
					return (
						<tr key={user.id.value}>
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
