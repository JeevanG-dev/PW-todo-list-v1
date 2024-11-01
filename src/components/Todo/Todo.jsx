import { useState } from "react";

function Todo({ todoData, isFinished, handleEventClick, onDelete, onEdit }) {
  const [tru, setTru] = useState(isFinished);
  const [istrue, setIsTrue] = useState(true);

  const [getValue, setGetValue] = useState('')

  return (
    <div>
      <input
        type="checkbox"
        checked={tru}
        onChange={(e) => {
          setTru(e.target.checked);
          handleEventClick(e.target.value);
        }}
      />
      <span>{istrue ?  todoData : <input onChange={(e)=>{setGetValue(e.target.value)}} />}</span>

      <button
        onClick={() => {
          setIsTrue(true);
          setIsTrue(!istrue);
          onEdit(getValue)
        }}
      >
        {istrue ? "Edit" : "Save"}
      </button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Todo;
