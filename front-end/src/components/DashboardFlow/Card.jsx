const Card = ({ children, className }) => {
	return (
		<div className={`py-3 px-5 bg-gray-100 rounded-md ${className}`}>
			{children}
		</div>
	);
};

export default Card;
