import "../styles/Select.css";

export default function Select({
  text,
  name,
  options,
  placeholder,
  handleOnChange,
  value,
}) {
  return (
    <div id="Select">
      <div className="label">
        <label htmlFor={name}>{text}</label>
      </div>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ""}
      >
        <option>{placeholder}</option>
        {options.map((option) => (
          <option value={option._id} key={option._id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
