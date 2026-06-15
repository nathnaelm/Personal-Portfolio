import LinkedInLogo from '../../assets/LinkedInLogo.png'
import GithubLogo from '../../assets/GithubLogo.png'

function Home() {
  return (
    <div>
      <div>
        <a href="https://www.linkedin.com/in/nathnael-mecuria/" target="_blank" rel="noreferrer">
          <img src={LinkedInLogo} className="LinkedIn logo" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/nathnaelm" target="_blank" rel="noreferrer">
          <img src={GithubLogo} className="Github logo" alt="Github logo" />
        </a>
      </div>

      <h1>Welcome to my Portfolio!</h1>
      <div className="aboutMecard">
        <p>
          Hi there! I'm Nathnael Mecuria, a curious and driven computer science recent graduate and incoming Master's student at Virginia Tech with an interest in software engineering, particularly front-end as well as app development.
          I enjoy creating intuitive, user-focused applications that balance clean design with strong technical foundations.
          I bring a problem-solving mindset, attention to detail, and a strong desire to continuously learn and improve within collaborative team environments.
        </p>
      </div>
    </div>
  )
}

export default Home