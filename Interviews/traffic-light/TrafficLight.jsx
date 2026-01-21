import { useState, useEffect } from "react";

const lights = [
  {
    color: "red",
    duration: 4000,
    next: "green",
  },
  {
    color: "yellow",
    duration: 500,
    next: "red",
  },
  {
    color: "green",
    duration: 3000,
    next: "yellow",
  },
];

export default function TrafficLight() {
  const [activeLight, setActiveLight] = useState(lights[0].color);
  useEffect(() => {
    let id;
    lights.map((light) => {
      if (activeLight === light.color) {
        id = setTimeout(() => setActiveLight(light.next), light.duration);
      }
    });
    return () => clearTimeout(id);
  }, [activeLight]);
  return (
    <div className="traffic-light">
      {lights.map(({ color }, index) => (
        <div
          key={index}
          className={`lights ${color === activeLight && color}`}
        />
      ))}
    </div>
  );
}
