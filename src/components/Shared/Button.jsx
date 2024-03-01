const Button = ({
  children,
  onClick,
  disabled,
  className,
  type = "submit",
  variant = "primary",
}) => {
  const variants = {
    primary: "bg-black hover:bg-gray-800 text-white border border-black",
    secondary:
      "bg-transparent hover:bg-black text-black border border-black hover:text-white",
  };
  return (
    <button
      type={type}
      className={`${variants[variant]} px-6 py-3 rounded-md focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ease-in ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
