import React, { useState,useEffect } from "react";
import Todo from "./Todo";

function Todos({data}) {
  useEffect(()=>{
    fetch("https://todos-api-0168322868fd.herokuapp.com/api/login").then(a => a.json()).then(a =>{console.log(a);setTasks(a.msg.tasks)})
  },[])
const [tasks,setTasks]=useState([]);
  const [newTask, setNewTask] = useState(""); // State for the new task
  
 
 
 

  return (
    <div className="w-1024 mx-auto">
      {data?.msg!=="You are not authorized" && <input
        className="border-black border-2 p-4 my-4 w-80 outline-none"
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />}
 
 {data?.msg!=="You are not authorized" && <button
        className="bg-black p-4 text-white border-black border-2"
        onClick={function(){
          fetch("https://todos-api-0168322868fd.herokuapp.com/api/addTask",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json' // Specify the content type
              // You might need to add other headers here, depending on your API requirements
            },
            body: JSON.stringify({id:data.msg.id,task:newTask}) // Convert data to JSON string
          }).then(a => a.json().then(a => setTasks(a.tasks)));
           
        }}
      >
        Add Task
      </button>}
      <h1 className="font-bold text-5xl">Tasks</h1>
      {data?.msg==="You are not authorized" && <h1>No Tasks</h1>}          
      {tasks?.map((task,index) => (
        <Todo
          setTasks={setTasks}
          task={task}
          key={index}
        />
      ))}
    </div>
  );
}

export default Todos;
