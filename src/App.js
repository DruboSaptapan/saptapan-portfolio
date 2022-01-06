import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home'
// import Navigation from './pages/Home/Navigation/Navigation'
import Navigation from './Pages/Home/Navigation/Navigation'
import Blogs from './Pages/Home/Blogs/Blogs';
import Project from './Pages/Home/Projects/Project/Project'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/project/:projectId" element={<Project />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
