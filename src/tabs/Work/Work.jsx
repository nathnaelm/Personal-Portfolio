import { useState } from 'react'
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
                <p>
                    Hi there! I'm Nathnael Mecuria, a curious and driven computer science senior at Virginia Tech with an interest in software engineering, particularly front-end as well as app development.
                    I enjoy creating intuitive, user-focused applications that balance clean design with strong technical foundations.
                    I bring a problem-solving mindset, attention to detail, and a strong desire to continuously learn and improve within collaborative team environments.
                </p>
            </div>
        </>
    )
}

export default App
