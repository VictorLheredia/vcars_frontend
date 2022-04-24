import "../styles/Select.css";

export default function SelectSearchBar({
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
        <option value="" defaultValue="">
          {placeholder}
        </option>
        {options.map((option) => (
          <option value={option.name} key={option._id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
