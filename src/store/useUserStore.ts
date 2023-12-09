import { create } from 'zustand'
import { User } from '../types/types'

export interface UserState {
	users: User[]
	showColors: boolean
	orderByCountry: boolean
	getUsers: () => Promise<void>
	deleteUser: (uuid: string) => void
	toggleProperty: <K extends keyof UserState>(propertyName: K) => void
}

export const useUserStore = create<UserState>((set, get) => ({
	users: [],
	showColors: false,
	orderByCountry: false,
	getUsers: async () => {
		const response = await fetch('https://randomuser.me/api/?results=100')
		const users = await response.json()

		set(() => ({
			users: users.results,
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
}))
