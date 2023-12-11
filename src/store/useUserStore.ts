import { create } from 'zustand'
import { User } from '../types/types'

export interface UserState {
	users: User[]
	originalUsers: User[]
	showColors: boolean
	orderByCountry: boolean
}

interface UserActions {
	setUsers: (newUsers: User[]) => void
	deleteUser: (uuid: string) => void
	toggleProperty: <K extends keyof UserState>(propertyName: K) => void
	/* getUsers: () => Promise<void> */
	/* resetUsers: () => void */
}

export const useUserStore = create<UserState & UserActions>((set, get) => ({
	users: [],
	originalUsers: [],
	showColors: false,
	orderByCountry: false,
	setUsers: (newUsers) => {
		set(() => ({
			users: newUsers,
			originalUsers: newUsers,
		}))
	},
	deleteUser: (uuid) => {
		const filterUsers = get().users.filter((u) => u.login.uuid !== uuid)

		set(() => ({
			users: filterUsers,
		}))
	},
	toggleProperty: (propertyName) => {
		set(() => ({
			[propertyName]: !get()[propertyName],
		}))
	},
	/* getUsers: async () => {
		const response = await fetch('https://randomuser.me/api/?results=100')
		const users = await response.json()
	
		set(() => ({
			users: users.results,
			originalUsers: users.results,
		}))
	}, */
	/* resetUsers: () => {
		set(() => ({
			users: get().originalUsers,
		}))
	}, */
}))
