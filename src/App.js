import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Settings from './Components/Settings'; 
import Cardlist from './Components/Cardlist';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="flex h-screen">
          <Sidebar className="hidden sm:block" />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/card-list" element={<Cardlist />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
