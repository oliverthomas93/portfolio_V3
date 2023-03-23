import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useFetcher,
} from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Projects from './components/Projects';
import { bearerToken } from './bearertoken';

function App() {
  const [userData, setUserData] = useState();

  const getUserData = () => {
    fetch(`https://api.github.com/user/starred`, {
      headers: {Authorization: bearerToken}
    })
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
          <Route path='/projects' element={userData ? <Projects data={userData}/> : null} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
