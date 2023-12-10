import { UserState, useUserStore } from '../../store/useUserStore'

interface ButtonProps {
	text: string
	propertyName: keyof UserState
}

const Button = ({ text, propertyName }: ButtonProps) => {
	const { toggleProperty } = useUserStore()
	return (
		<button className='btn' onClick={() => toggleProperty(propertyName)}>
			{text}
		</button>
	)
}

export default Button
