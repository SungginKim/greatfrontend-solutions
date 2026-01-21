import { useState, useEffect } from "react";

const SEGMENTS = {
  0: ["a", "b", "c", "d", "e", "f"],
  1: ["b", "c"],
  2: ["a", "b", "d", "e", "g"],
  3: ["a", "b", "c", "d", "g"],
  4: ["b", "c", "f", "g"],
  5: ["a", "c", "d", "f", "g"],
  6: ["a", "c", "d", "e", "f", "g"],
  7: ["a", "b", "c"],
  8: ["a", "b", "c", "d", "e", "f", "g"],
  9: ["a", "b", "c", "d", "f", "g"],
};

const ALL_SEGMENTS = ["a", "b", "c", "d", "e", "f", "g"];

const getTime = () => {
  const date = new Date();
  const h = date.getHours().toString().padStart(2, "0");
  const m = date.getMinutes().toString().padStart(2, "0");
  const s = date.getSeconds().toString().padStart(2, "0");
  return `${h}:${m}:${s}`;
};

export default function Clock() {
  const [time, setTime] = useState(() => getTime());

  useEffect(() => {
    const id = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(id);
  }, []);

  const timeDigit = time.split("");

  return (
    <div className="clock">
      {timeDigit.map((digits, index) =>
        digits !== ":" ? (
          <Digit key={index} digits={Number(digits)} />
        ) : (
          <Colon />
        )
      )}
    </div>
  );
}

function Digit({ digits }) {
  return (
    <div className="digit">
      {ALL_SEGMENTS.map((segment) => (
        <div
          className={`segment ${segment} ${
            SEGMENTS[digits].includes(segment) ? "on" : "off"
          }`}
        ></div>
      ))}
    </div>
  );
}
function Colon() {
  return (
    <div className="semicolon">
      <div className="colon" />
      <div className="colon" />
    </div>
  );
}
