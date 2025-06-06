import styles from "../styles/Input.module.css"

export const InputField = ({ label, id, type, onChange, value, name, inputClass, labelClass, onBlur }) => {
  return (
    <>
      <label htmlFor={id} className={styles[labelClass]}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={styles[inputClass]}
      />
    </>
  );
};
