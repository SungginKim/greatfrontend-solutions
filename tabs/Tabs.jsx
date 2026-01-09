import { useState } from "react";

const items = [
  {
    value: "html",
    label: "HTML",
    panel:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    value: "css",
    label: "CSS",
    panel:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    value: "js",
    label: "JS",
    panel:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

export default function Tabs() {
  const [value, setValue] = useState(items[0].value);
  return (
    <div>
      <div>
        {items.map(({ label, value: itemValue }) => (
          <button
            key={itemValue}
            className={["tabs-item", itemValue === value && "tabs-item-active"]
              .filter(Boolean)
              .join(" ")}
            onClick={() => {
              setValue(itemValue);
            }}
          >
            {label}
          </button>
        ))}
      </div>
      <div>
        {items.map(({ panel, value: itemValue }) => (
          <p key={itemValue} hidden={itemValue !== value}>
            {panel}
          </p>
        ))}
      </div>
    </div>
  );
}
