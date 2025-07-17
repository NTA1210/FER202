import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import LaptopList from './components/LaptopList';
import LaptopDetail from './components/LaptopDetail';
import NotFound from './components/NotFound';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route 
            path="/laptops" 
            element={user ? <LaptopList /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/laptops/:id" 
            element={user ? <LaptopDetail /> : <Navigate to="/login" />} 
          />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
