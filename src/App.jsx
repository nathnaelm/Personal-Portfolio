import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './tabs/Home/Home'
import Experience from './tabs/Experience/Experience'
import Portfolio from './tabs/Portfolio/Portfolio'
import Contact from './tabs/Contact/Contact'
import TabBar from './components/TabBar'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-shell">
        <TabBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
