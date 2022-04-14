export default function Select({
    text,
    name,
    options,
    placeholder,
    handleOnChange,
    value,
  }) {
    return (
      <div>
        <label htmlFor={name}>{text}</label>
        <select
          name={name}
          id={name}
          onChange={handleOnChange}
          value={value || ""}
        >
          <option>{placeholder}</option>
          {options.map((option) => (
            <option value={option._id} key={option._id}>
              {option.nome}
            </option>
          ))}
        </select>
      </div>
    );
  }
  