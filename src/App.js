import { useEffect,useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link,useNavigate } from 'react-router-dom';
import '../src/index.css';
import Todos from './components/Todos';
import Login from './components/Login';
import Register from './components/Register';
function App() {
   
  let [data,setData]=useState(undefined);
  useEffect(()=>{
    fetch("https://todos-api2.onrender.com/api/login").then(a => a.json()).then(a =>{setData(a)})
  },[])
  return (
    <div className="App">
       <Router>
       <header className="bg-zinc-800 text-white py-8">
      <div className="flex justify-between w-1024 mx-auto">
        <Link to="/">Todos Tracker</Link>
        <div className="flex items-center gap-8 cursor-pointer">
          
          {/* <h2>{data.msg && data.msg.name}</h2> */}
          {data===undefined?null:<h2>{data.msg.name}</h2>}
      {/* <Link to="/login">Login</Link>  */}
      {data?.msg === "You are not authorized" ? 
        <Link to="/login">Login</Link>:      <h1 onClick={()=>{
          fetch("/api/logout").then(a => a.json()).then(a =>{console.log(a);setTimeout(()=>{window.location.reload()},1000)})
        }}>Log Out</h1>}
            {data?.msg === "You are not authorized" && (
        <Link to="/register">Register</Link>
      )}
             
  
       

        </div>
      </div>
    </header>
        <Routes>
        <Route exact path="/" element={<Todos data={data} />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />

        </Routes>
       </Router>
  
    </div>
  );
}

export default App;
