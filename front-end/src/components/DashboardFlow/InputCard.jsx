import Card from "./Card";

const InputCard = ({
  value,
  onChange,
  className,
  children,
  placeholder,
  disabled,
}) => {
  return (
    <Card
      className={`flex flex-col focus-within:outline-2 focus-within:outline focus-within:outline-primary-500 ${className}`}
    >
      {children}
      <textarea
        className="w-full h-full bg-transparent border-0 focus:!ring-0 p-0 pt-2 resize-none text-lg disabled:text-gray-500"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
    </Card>
  );
};

export default InputCard;
