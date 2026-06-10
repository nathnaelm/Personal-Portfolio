import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './tabs/Home/Home'
import Work from './tabs/Work/Work'
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
          <Route path="/work" element={<Work />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
