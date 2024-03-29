import { useState } from "react";
function Register(){
    let [username,setName]=useState("");
    let [password,setPassword]=useState("");
    function handleFetch(){
        fetch('https://todos-api2.onrender.com/api/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', // Specify the content type
    // You might need additional headers like authentication tokens, etc.
  },
  body: JSON.stringify({username,password}), // Convert the JavaScript object to a JSON string
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response body as JSON
  })
  .then(data => {
    // Handle the data returned by the server
    console.log('POST request successful:', data);
    // Perform any necessary operations with the received data
  })
  .catch(error => {
    // Handle errors that may occur during the fetch operation
    console.error('There was a problem with the POST request:', error);
  });
    }
    return <div className="w-1024 mx-auto">
        <h1 className="font-bold text-5xl">Register</h1>
        <p className=" mt-4">Username</p>
        <input
        className="border-black border-2 p-4 my-4 w-80 outline-none"
        type="text"
        onInput={e => setName(e.target.value)}   
      />
              <p className=" mt-4">Password</p>
        <input
        className="border-black border-2 p-4 my-4 w-80 outline-none"
        type="text"   
        onInput={e => setPassword(e.target.value)}  
      />
      <br/>
      <button onClick={handleFetch} className="bg-black p-4 text-white border-black border-2">Register</button>
    </div>
}
export default Register;