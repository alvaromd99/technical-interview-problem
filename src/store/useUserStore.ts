import { create } from 'zustand'
import { User } from '../types/types'

interface UserState {
	users: User[]
	getUsers: () => Promise<void>
}

export const useUserStore = create<UserState>((set) => ({
	users: [],
	getUsers: async () => {
		const response = await fetch('https://randomuser.me/api/?results=100')
		const users = await response.json()

		set((state) => ({
			...state,
			users: users.results,
		}))
	},
}))
