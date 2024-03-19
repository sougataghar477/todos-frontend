import { BrowserRouter as Router,Link } from 'react-router-dom';
import { FaMoon } from 'react-icons/fa';

function Header() {
  return (
    <Router>

    <header className="bg-zinc-800 text-white py-8">
      <div className="flex justify-between w-1024 mx-auto">
        <Link to="/">Todos Tracker</Link>
        <div className="flex items-center gap-8 cursor-pointer">
          <FaMoon />
          <h2>User Name</h2> {/* Replace with actual user information */}
          <Link to="/login">Login</Link>
        </div>
      </div>
    </header>
    </Router>
  );
}

export default Header;
