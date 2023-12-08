interface Props {
	text: string
	handleClick: () => void
}

const Button = ({ text, handleClick }: Props) => {
	return (
		<button className='btn' onClick={handleClick}>
			{text}
		</button>
	)
}

export default Button
