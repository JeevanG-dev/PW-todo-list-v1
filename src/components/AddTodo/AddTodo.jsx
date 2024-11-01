import { useState } from "react";

function AddTodo({handleOnClick}) {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="please add your task"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      />

      <button
        onClick={() => {
          handleOnClick(inputValue);
          setInputValue("");
          
        }}
      >
        Add
      </button>
    </>
  );
}

export default AddTodo;
