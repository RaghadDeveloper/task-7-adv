import { InputFieldType } from "@/interfaces";

const InputField = ({ field }: { field: InputFieldType }) => {
  const { label, type, placeholder, options } = field;
  const styles = {
    label: "font-semibold text-lg",
    field: "bg-white rounded-lg px-6 py-3.5",
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="" className={styles.label}>
        {label}
      </label>
      {options ? (
        <select className={styles.field}>
          <option>{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input type={type} placeholder={placeholder} className={styles.field} />
      )}
    </div>
  );
};

export default InputField;
