import { useState } from 'react';
import './App.css'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import Content from './components/Content';

function App() {

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  // Function to toggle sidebar width
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <>
      <div className='bg-ytBlack h-full w-full'>
        <Nav toggleSidebar={toggleSidebar} />
        <div className='h-[calc(100%-5rem)] w-full absolute top-20 flex'>
          <Sidebar isExpanded={isSidebarExpanded} />
          <Content/>
        </div>
      </div>
    </>
  )
}

export default App
