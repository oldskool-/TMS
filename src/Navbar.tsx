import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>TSM Application</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/sandbox/sandbox">Sandbox</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;