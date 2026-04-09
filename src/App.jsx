import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [currentTab, setCurrentTab] = useState('home')

  return (
    <>
      <div>
        <div className="TabBar">
          <button onClick={() => setCurrentTab('home')} className={currentTab === 'home' ? 'active' : ''}> Home </button>
          <button onClick={() => setCurrentTab('work')} className={currentTab === 'work' ? 'active' : ''}> Work </button>
          <button onClick={() => setCurrentTab('portfolio')} className={currentTab === 'portfolio' ? 'active' : ''}> Portfolio </button>
          <button onClick={() => setCurrentTab('personal')} className={currentTab === 'personal' ? 'active' : ''}> Personal </button>
          <button onClick={() => setCurrentTab('contact')} className={currentTab === 'contact' ? 'active' : ''}> Contact </button>
        </div>
        {/* <div className="content">
          {currentTab === 'home' && <Home />}
          {currentTab === 'work' && <Work />}
          {currentTab === 'portfolio' && <Portfolio />}
          {currentTab === 'personal' && <Personal />}
          {currentTab === 'contact' && <Contact />}
        </div> */}
        <div >
          <a href="https://www.linkedin.com/in/nathnael-mecuria/" target="_blank">
            <img src={"LinkedInLogo.png"} className="LinkedIn logo" alt="LinkedIn logo" />
          </a>
          <a href="https://github.com/nathnaelm" target="_blank">
            <img src={"GithubLogo.png"} className="Github logo" alt="Github logo" />
          </a>
        </div>
      </div>
      <h1>Welcome to my Portfolio!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
