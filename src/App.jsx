import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes,Route,Link} from 'react-router-dom';
import { Home } from './pages/home';
import { Dashboard } from './pages/dashboard';
import { ProtectedRoute } from './utils/protectedRoutes';
import { Login } from './pages/Login';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
        <Route path = "/login" element = {<Login/>}></Route>
        <Route path = "/dashboard" element = {
          <ProtectedRoute>
          <Dashboard/>
          </ProtectedRoute>
        }>
          <Route path = "home" element = {<Home/>}></Route>  
        </Route>
     </Routes>

    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>
  )
}

export default App
