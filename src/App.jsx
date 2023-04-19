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
import About from './components/About';
import LoadingCard from './components/LoadingCard';

const liveUrl = 'https://portfolio-v3-backend.onrender.com/getrepos'
const testUrl = 'http://localhost:3030/getrepos'

function App() {
  const [userData, setUserData] = useState();

  const getUserData = () => {
    fetch(liveUrl)
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
          <Route path='/' element={<Landing data={userData}/>} />
          <Route path='/projects' element={userData ? <Projects data={userData}/> : <LoadingCard />} />
          <Route path='/about' element={userData ? <About data={userData}/> : null} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
