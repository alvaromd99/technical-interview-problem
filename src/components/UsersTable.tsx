import { User } from '../types/types'

interface Props {
	users: User[]
}

export default function UsersTable({ users }: Props) {
	return (
		<table>
			<thead>
				<tr>
					<th>Photo</th>
					<th>Name</th>
					<th>Last Name</th>
					<th>Country</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user, index) => {
					return (
						<tr key={index}>
							<td>
								<img src={user.picture.thumbnail} alt='Photo' />
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
