import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';

function App() {

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  // Function to toggle sidebar width
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <Router>
      <div className='bg-ytBlack h-full w-full'>
        <Nav toggleSidebar={toggleSidebar} />
        <div className='h-[calc(100%-5rem)] w-full absolute top-20 flex'>
          <Sidebar isExpanded={isSidebarExpanded} />
          <div className='flex-1'>
            {/* Define routes here */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
