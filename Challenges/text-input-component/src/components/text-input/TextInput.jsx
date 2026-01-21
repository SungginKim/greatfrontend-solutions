import { useState } from "react";
import "./styles.css";

function TextInput({
  label,
  name,
  type = "text",
  placeholder,
  hintText,
  errorMessage,
  leadingIcon: EmailIcon,
  trailingIcon: QuestionIcon,
  disabled,
}) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="text-input-container">
      <label htmlFor={name}>{label}</label>
      <div className="input-container">
        {EmailIcon && <EmailIcon className="email-icon" size="20px" />}
        <input
          id={name}
          name={name}
          aria-describedby={errorMessage ? errorMessage : hintText}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          value={input}
          onChange={handleChange}
          className={`${EmailIcon ? "input-has-leading-icon" : ""} ${errorMessage ? "input-has-error" : ""}`}
        />
        {QuestionIcon && (
          <QuestionIcon
            className={`question-icon ${errorMessage && "error"}`}
            size="15px"
          />
        )}
      </div>
      <span
        id={errorMessage ? errorMessage : hintText}
        className={errorMessage ? "error" : "hint-text"}
      >
        {errorMessage ? errorMessage : hintText}
      </span>
    </div>
  );
}

export default TextInput;
