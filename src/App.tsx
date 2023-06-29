import Navbar from "./Navbar.tsx";
import Home from "./Home.tsx";
import Sandbox from "./sandbox/Sandbox.tsx";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/sandbox/sandbox" element={<Sandbox/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
 
export default App;