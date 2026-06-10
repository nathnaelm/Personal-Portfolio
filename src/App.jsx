import LinkedInLogo from '../LinkedInLogo.png'
import GithubLogo from '../GithubLogo.png'
import Home from './tabs/Home/Home'
import Work from './tabs/Work/Work'
import Portfolio from './tabs/Portfolio/Portfolio'
import Contact from './tabs/Contact/Contact'
import './App.css'

function App() {

  return (
    <div>


      {/* <Router> */}

      {/* <TabBar /> */}

      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}

      <div>

        <div>
          <a href="https://www.linkedin.com/in/nathnael-mecuria/" target="_blank" rel="noreferrer">
            <img src={LinkedInLogo} className="LinkedIn logo" alt="LinkedIn logo" />
          </a>
          <a href="https://github.com/nathnaelm" target="_blank" rel="noreferrer">
            <img src={GithubLogo} className="Github logo" alt="Github logo" />
          </a>
        </div>

      </div>

      <h1>Welcome to my Portfolio!</h1>
      <div className="aboutMecard">
        <p>
          Hi there! I'm Nathnael Mecuria, a curious and driven computer science senior at Virginia Tech with an interest in software engineering, particularly front-end as well as app development.
          I enjoy creating intuitive, user-focused applications that balance clean design with strong technical foundations.
          I bring a problem-solving mindset, attention to detail, and a strong desire to continuously learn and improve within collaborative team environments.
        </p>
      </div>
      {/* </Router> */}
    </div>
  )
}

export default App
