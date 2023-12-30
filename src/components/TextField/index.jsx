const TextField = ({ type, className, value, handleValue, ...rest }) => {
  const handleChange = (e) => {
    handleValue(e.target.value);
  };
  return (
    <input
      className={`form-control rounded-0 ${className}`}
      type={type}
      value={value}
      onChange={handleChange}
      {...rest}
    />
  );
};

export default TextField;
