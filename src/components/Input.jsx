import "../styles/Input.css";

export default function Input({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
}) {
  return (
    <div id="Input">
      <div className="label">
        <label htmlFor={name}>{text}</label>
      </div>
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
