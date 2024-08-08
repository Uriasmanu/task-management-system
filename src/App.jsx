import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Reports" element={<Reports/>} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
