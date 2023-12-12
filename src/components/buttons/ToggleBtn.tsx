import { UserState, useUserStore } from '../../store/useUserStore'
import { SortBy } from '../../types/types'

interface ToggleBtnProps {
	text: string
	propertyName?: keyof UserState
}

const ToggleBtn = ({ text, propertyName }: ToggleBtnProps) => {
	const { sortingValue } = useUserStore()
	const { toggleProperty, setSortingValue } = useUserStore()

	const handleClick =
		propertyName !== undefined
			? () => toggleProperty(propertyName)
			: () => {
					const newSortingValue =
						sortingValue === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
					setSortingValue(newSortingValue)
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  }

	return (
		<button className='btn' onClick={handleClick}>
			{text}
		</button>
	)
}

export default ToggleBtn
