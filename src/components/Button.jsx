export default function Button({ children, disabled, fullWidth = false, onClick }) {
	return (
		<button
			className={` ${
				disabled ? 'bg-neutral-300 cursor-not-allowed' : 'bg-neutral-950 hover:bg-neutral-800 cursor-pointer'
			} p-2 text-white rounded-md font-sans transition-colors duration-300 ${fullWidth ? 'w-full' : ''}`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
