import { UserState, useUserStore } from '../../store/useUserStore'

interface ToggleBtnProps {
	text: string
	propertyName: keyof UserState
}

const ToggleBtn = ({ text, propertyName }: ToggleBtnProps) => {
	const { toggleProperty } = useUserStore()
	return (
		<button className='btn' onClick={() => toggleProperty(propertyName)}>
			{text}
		</button>
	)
}

export default ToggleBtn
