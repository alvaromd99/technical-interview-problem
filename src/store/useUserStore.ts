import { create } from 'zustand'
import { User } from '../types/types'

interface UserState {
	users: User[]
	showColors: boolean
	getUsers: () => Promise<void>
	toggleShowColors: () => void
}

export const useUserStore = create<UserState>((set, get) => ({
	users: [],
	showColors: false,
	getUsers: async () => {
		const response = await fetch('https://randomuser.me/api/?results=100')
		const users = await response.json()

		set(() => ({
			users: users.results,
		}))
	},
	toggleShowColors: () => {
		set((state) => ({
			...state,
			showColors: !get().showColors,
		}))
	},
}))
