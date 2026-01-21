import { useState } from "react";

export default function TodoList() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  const handleInputChange = (e) => {
    setTask(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() != "") {
      setTask("");
      return setList((oldList) => [...oldList, task]);
    }
    return;
  };
  const handleDelete = (indexToBeDeleted) => {
    const updatedList = list.filter((_, index) => index != indexToBeDeleted);
    return setList(updatedList);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Add your task"
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
      <ul>
        {list.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </form>
  );
}
