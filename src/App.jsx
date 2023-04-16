import { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  useFetcher,
} from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Projects from './components/Projects';
import { faHourglass1 } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [userData, setUserData] = useState();

  const getUserData = () => {
    fetch(`https://portfolio-v3-backend.onrender.com/getrepos`)
    .then(response => response.json()
    .then(data => {
      console.log(data)
      setUserData(data)
    }))
    
  }

  useEffect(() => {
    getUserData()
  }, [])
      
  return (
    <div className="App min-h-screen text-ot-dark dark:text-white dark:bg-ot-dark">
      
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={userData ? <Landing data={userData}/> :<h1>error</h1>} />
          <Route path='/projects' element={userData ? <Projects data={userData}/> : null} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
