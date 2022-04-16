export default function Input({
    type,
    text,
    name,
    placeholder,
    handleOnChange,
    value,
  }) {
    return (
      <div>
        <label htmlFor={name}>{text}</label>
        <input
          name={name}
          type={type}
          id={name}
          placeholder={placeholder}
          onChange={handleOnChange}
          value={value}
        />
      </div>
    );
  }