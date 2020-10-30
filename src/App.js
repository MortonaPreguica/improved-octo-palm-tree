import './App.css'
import React from 'react'
import Navbar from './components/navbar'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Sidebar />
      <Navbar />
    </Router>
  );
}

export default App;
