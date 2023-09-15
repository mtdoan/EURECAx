const Button = ({ onClick, label, className, icon }) => {
	return (
		<button
			onClick={onClick}
			className={`bg-primary-100 w-32 p-1 font-bold text-center text-primary-700/70 rounded-lg hover:opacity-80 ${className}`}
		>
			<div className="flex flex-row gap-1">
				<div className="mx-auto">{label}</div>
				{icon && <div>{icon}</div>}
			</div>
		</button>
	);
};

export default Button;
