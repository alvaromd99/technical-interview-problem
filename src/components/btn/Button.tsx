import { UserState, useUserStore } from '../../store/useUserStore'

interface Props {
	text: string
	propertyName: keyof UserState
}

const Button = ({ text, propertyName }: Props) => {
	const { toggleProperty } = useUserStore()
	return (
		<button className='btn' onClick={() => toggleProperty(propertyName)}>
			{text}
		</button>
	)
}

export default Button
