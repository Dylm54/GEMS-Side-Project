import './App.css'
import { Home } from './pages/home'
import { Context } from './context'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from './pages/Login';
import PrivateRouteHome from './utils/PrivateRouteHome';

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRouteHome />}>
          <Route path="/" element={
            <Context>
              <Home />
            </Context>
          } />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
