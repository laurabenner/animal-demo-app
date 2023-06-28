export function TimeInput({ label, defaultValue, onChange }) {
  return (
    <>
      <label htmlFor={label}>{label + " Time:"}</label>
      <input type="time" id={label} name={label} defaultValue={defaultValue} onChange={onChange}></input>
    </>
  );
}