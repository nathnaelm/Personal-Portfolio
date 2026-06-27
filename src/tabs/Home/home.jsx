import LinkedInLogo from '../../assets/LinkedInLogo.png'
import LinkedIn_logo from '../../assets/LinkedIn_logo.svg'
import GithubLogo from '../../assets/GithubLogo.png'
import Headshot from '../../assets/Headshot.jpg'

function Home() {
  return (
    <section className="home-page">
      <div className="home-hero">
        <div className="home-stack left-stack">
          <div className="home-intro">
            <p className="eyebrow">Attentive • Sharp • Learner</p>
            <h1>Nathnael Mecuria</h1>
          </div>

          <div className="home-main-row">
            <div className="home-portrait-inline">
              <img src={Headshot} alt="Nathnael Mecuria headshot" />
            </div>

            <div className="home-details-group">
              <div className="education-item single-education">
                <span className="education-degree">B.S. in Computer Science</span>
                <span className="education-dates">2022–2026 • Blacksburg, VA</span>
                <span className="education-degree">M.Eng in Computer Science</span>
                <span className="education-dates">2026–2028 • Arlington, VA</span>
              </div>

              <div className="home-actions centered-actions">
                <a className="home-link primary" href="#/portfolio">
                  See my work
                </a>
                <a className="home-link secondary" href="#/contact">
                  Get in touch
                </a>
              </div>

              <div className="social-links centered-socials">
                <a href="https://www.linkedin.com/in/nathnael-mecuria/" target="_blank" rel="noreferrer" className="social-link">
                  <img src={LinkedIn_logo} className="social-icon" alt="LinkedIn logo" />
                </a>
                <a href="https://github.com/nathnaelm" target="_blank" rel="noreferrer" className="social-link">
                  <img src={GithubLogo} className="social-icon" alt="Github logo" />
                </a>
              </div>
            </div>

            <div className="home-card right-card">
              <h2>About me</h2>
              <p className="home-card-copy">
                Hi there! I'm Nathnael Mecuria, a curious and driven rising Master's student in Computer Science at Virginia Tech's innovation campus in Arlington/DC. I have an interest in software engineering, particularly full-stack, app development, and AI engineering.
              </p>
              <p className="home-card-copy">
                I enjoy creating intuitive, user-focused applications that balance clean design with strong technical foundations. I bring a problem-solving mindset, attention to detail, and a strong desire to continuously learn and improve within collaborative team environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home