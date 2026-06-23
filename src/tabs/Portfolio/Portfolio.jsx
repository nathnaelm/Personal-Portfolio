
const projects = [
    {
        title: 'Roommate Finder',
        description: 'Implemented preference-based roommate matching functionality, translating user inputs into match results rendered dynamically within the web application’s frontend. Collaborated on the development of a full - stack roommate - finding web application using Git, contributing well-documented commits and creating specialized features within a shared team codebase.',
        period: 'Aug 2025 - Dec 2025',
        link: '#',
        accent: 'accent-violet',
    },
    {
        title: 'Study Stream',
        description: 'Co-developed Study Stream, a Swift-based productivity app enhancing study habits through features like a session tracker, reflection journal, and focus mode with ambient sound, improving user retention through clean, intuitive UI/ UX design. Integrated Spotify and Quote APIs to personalize user experience, storing all session data, reflections, and external content in a local SwiftData database for full offline access and data privacy. Collaborated with a team of developers to design and implement features like calendar heatmaps, streak tracking, and tagged reflections, increasing app engagement by delivering a holistic view of user study patterns.',
        period: 'Mar 2025 - May 2025',
        link: 'https://github.com/nathnaelm/StudyStream',
        accent: 'accent-violet',
    },
    {
        title: 'Capstone LoX Project',
        description: 'Collaborated on a capstone research project focused on evaluating the effectiveness of the LoX defense framework for protecting Large Language Models from harmful fine-tuning attacks. Implemented and tested fine-tuning pipelines using LLaMA-2-7B, QLoRA, and multiple benchmark datasets, measuring model robustness through automated safety evaluations and Attack Success Rate (ASR) metrics. Conducted experimental analysis comparing defended and baseline models, contributing to research on secure and trustworthy deployment of generative AI systems.',
        period: 'Feb 2026 - May 2026',
        link: 'https://github.com/nathnaelm/CS-4094-Capstone-LoX-project',
        accent: 'accent-emerald',
    }
]

function Portfolio() {
    return (
        <section className="portfolio-page">
            <header className="portfolio-header">
                <p className="eyebrow">My work</p>
                <h1>Projects</h1>
                <p className="subtle-copy">
                    A collection of my personal and academic projects showcasing various technologies and skills.
                </p>
            </header>

            <div className="portfolio-grid">
                {projects.map((project) => (
                    <article className={`portfolio-card ${project.accent}`} key={project.title}>
                        <div className="portfolio-card-content">
                            <div className="portfolio-card-header">
                                <h2>{project.title}</h2>
                                <span className="portfolio-period">{project.period}</span>
                            </div>
                            <p className="portfolio-description">{project.description}</p>
                            {project.link !== '#' && (
                                <a href={project.link} target="_blank" rel="noreferrer" className="portfolio-link">
                                    View Project →
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Portfolio