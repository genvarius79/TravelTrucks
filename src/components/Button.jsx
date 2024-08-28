const Button = ({ children, onClick, className, type = "submit" }) => {
  const handleClick = (e) => {
    e.currentTarget.blur();
    if (onClick) {
      onClick();
    }
  };
  return (
    <button onClick={handleClick} className={className} type={type}>
      {children}
    </button>
  );
};
export default Button;
