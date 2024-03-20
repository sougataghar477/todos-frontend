import { RiDeleteBin5Line } from "react-icons/ri";
function Todo({task,setTasks}){
return <div className="flex gap-4 items-center task-card w-max p-6 my-8">
    <h1 className="text-2xl">{task}</h1>
    <RiDeleteBin5Line   onClick={()=>fetch("https://todos-api2.onrender.com/api/deleteTask",{
        method:'POST',
        headers: {
            'Content-Type': 'application/json' // Specify the content type
            // You might need to add other headers here, depending on your API requirements
          },
          body: JSON.stringify({taskToRemove:task})
    }).then(a => a.json()).then(a => setTasks(a.tasks))}/>
</div>
}
export default Todo;