"use client";
import { InputFieldType } from "@/interfaces";
import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const InputField = ({ field }: { field: InputFieldType }) => {
  const [show, setShow] = useState(false);
  const { label, type, placeholder, options,name } = field;
  const styles = {
    label: "font-semibold text-lg",
    field:
      "w-full bg-white rounded-lg px-6 py-3.5 focus:outline-none border border-gray-300 focus:ring focus:ring-orange-400 focus:ring-2",
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      {options ? (
        <select id={name} className={styles.field}>
          <option>{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <div className="w-full relative">
          <input
            id={name}
            type={type === "password" ? (show ? "text" : "password") : type}
            placeholder={placeholder}
            className={styles.field}
          />
          {type === "password" && (
            <span
              className=" absolute top-1/2 right-2 -translate-1/2 cursor-pointer"
              onClick={() => setShow((prev) => !prev)}
            >
              {show ? <BsEyeSlashFill /> : <BsEyeFill />}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default InputField;
