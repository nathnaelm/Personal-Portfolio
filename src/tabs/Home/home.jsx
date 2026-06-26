import LinkedInLogo from '../../assets/LinkedInLogo.png'
import GithubLogo from '../../assets/GithubLogo.png'

function Home() {
  return (
    <section className="home-page">
      <div className="home-hero">
        <div className="home-intro">
          <p className="eyebrow">Attentive • Sharp • Learner</p>
          <h1>Nathnael Mecuria</h1>
          <p className="home-subtitle">
            Class of 2026 Computer Science graduate and incoming Master’s student at Virginia Tech building thoughtful web and mobile experiences.
          </p>
          <h3 className="home-subtitle">
            Virginia Tech  B.S. in CS •  2022 - 2026, Blacksburg, VA
          </h3>
          <h3 className="home-subtitle">
            Virginia Tech  M.Eng in CS •  2026 - 2028, Arlington, VA
          </h3>

          <div className="home-actions">
            <a className="home-link primary" href="#/portfolio">
              See my work
            </a>
            <a className="home-link secondary" href="#/contact">
              Get in touch
            </a>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/nathnael-mecuria/" target="_blank" rel="noreferrer" className="social-link">
              <img src={LinkedInLogo} className="social-icon" alt="LinkedIn logo" />
            </a>
            <a href="https://github.com/nathnaelm" target="_blank" rel="noreferrer" className="social-link">
              <img src={GithubLogo} className="social-icon" alt="Github logo" />
            </a>
          </div>
        </div>

        <div className="home-card">
          <h2>About me</h2>
          <p className="home-card-copy">
            Hi there! I'm Nathnael Mecuria, a curious and driven rising Master's student in Computer Science at Virginia Tech's innovation campus in Arlington/DC. I have an interest in software engineering, particularly full-stack, app development, and AI engineering.
          </p>
          <p className="home-card-copy">
            I enjoy creating intuitive, user-focused applications that balance clean design with strong technical foundations. I bring a problem-solving mindset, attention to detail, and a strong desire to continuously learn and improve within collaborative team environments.
          </p>

          <div className="home-highlights">
            <span>Frontend development</span>
            <span>Swift / iOS</span>
            <span>Research & ML</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home