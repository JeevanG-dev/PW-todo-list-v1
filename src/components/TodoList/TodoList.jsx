import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../Context/TodoContext";

function TodoList() {
  const { list, setList } = useContext(TodoContext);

  return (
    <div>
      {list.map((todos) => (
        <Todo
          key={todos.id}
          todoData={todos.todoData}
          isFinished={todos.finished}
          handleEventClick = {(valueClicked)=>{
           
           const updateClickValue = list.map((t)=>
           
           {if(t.id == todos.id){
                todos.finished = valueClicked;

           }

           return t
           }
           
           )
setList(updateClickValue)
            
          }}

        onDelete = {()=>{
          const deletedNewList = list.filter(t => t.id != todos.id)
          setList(deletedNewList)
        }}
onEdit = {(getValue)=>{
    const editList = list.map((t)=> 
{
    if(t.id == todos.id){
        todos.todoData = getValue;
    }

    return t
}

    )

    setList(editList)
}}

        />
      ))}
    </div>
  );
}

export default TodoList;
