import React from "react";
import TextInput from "./components/text-input/TextInput";
import Icons from "./assets/icons";
import "./App.css";

const PLACEHOLDER = "name@email.com";
const HINTTEXT = "This is a hint text.";
const ERROR_MESSAGE = "This is an error message";
const EmailIcon = Icons.email;
const QuestionIcon = Icons.question;

const App = () => {
  return (
    <div className="form">
      <TextInput
        label="Email"
        name="email"
        placeholder={PLACEHOLDER}
        hintText={HINTTEXT}
        trailingIcon={QuestionIcon}
      />
      <TextInput
        label="Email"
        name="email"
        placeholder={PLACEHOLDER}
        hintText={HINTTEXT}
        leadingIcon={EmailIcon}
        trailingIcon={QuestionIcon}
      />
      <TextInput
        label="Email"
        name="email"
        placeholder={PLACEHOLDER}
        hintText={HINTTEXT}
        trailingIcon={QuestionIcon}
        disabled={true}
      />
      <TextInput
        label="Email"
        name="email"
        placeholder={PLACEHOLDER}
        hintText={HINTTEXT}
        errorMessage={ERROR_MESSAGE}
        trailingIcon={QuestionIcon}
      />
    </div>
  );
};

export default App;
