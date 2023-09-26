const Button = ({ onClick, label, className, icon, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`bg-primary-100 w-32 p-1 transition-all font-semibold text-center text-primary-700/70 rounded-lg hover:opacity-80 ${className}`}
    >
      <div className="flex flex-row gap-1 mx-auto justify-center items-center">
        {icon && <div className="">{icon}</div>}
        <div className="">{label}</div>
      </div>
    </button>
  );
};

export default Button;
