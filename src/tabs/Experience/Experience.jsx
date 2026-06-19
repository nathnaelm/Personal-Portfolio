import { useState } from 'react'
import MALogo from '../../assets/MALogo.png'
import AfDBLogo from '../../assets/AfDBLogo.png'
import CodeKidsLogo from '../../assets/CodeKidsLogo.jpg'
import CSVTLogo from '../../assets/CSVTLogo.png'

const experiences = [
    {
        category: 'Work',
        title: 'Motsepe Advertising Agency',
        role: 'Software Engineer Intern',
        period: 'May 2025 - August 2025',
        image: MALogo,
        alt: 'Motsepe Advertising Agencylogo',
        link: 'https://www.motsepeadvertising.com/',
        blurb: 'Deployed a centralized team car booking system leveraging React Native, Expo Router, and Supabase, enabling staff to schedule, modify, and cancel trips with live calendar synchronization for full team visibility. Integrated Supabase backend for authentication, bookings, and inspection data, leveraging storage buckets and PostgreSQL to allow users to upload pre-trip and post-trip inspection images, ensuring vehicle damage prevention. Designed user profile and strike tracking features with Supabase Auth, displaying trip history, violation counts, and activity logs, reducing car management times by 20% for the CEO and setting new standard practices.',
        accent: 'accent-sky',
    },
    {
        category: 'Work',
        title: 'African Development Bank (AfDB)',
        role: 'AI Solutions Engineer Intern',
        period: 'May 2025 - August 2025',
        image: AfDBLogo,
        alt: 'African Development Bank logo',
        link: 'https://www.afdb.org/en/',
        blurb: 'Built AI automation workflows in n8n, relying on local LLMs, REST APIs, and custom connectors to reduce manual document handling; solutions were approved by senior management, expediting document analysis by 11% . Implemented vector-based semantic search using Chroma and PostgreSQL, optimizing local LLM retrieval pipelines and improving query accuracy for company documentation.',
        accent: 'accent-sky',
    },
    {
        category: 'Research',
        title: 'CodeKids Research',
        role: 'Virginia Tech',
        period: 'August 2025 - December 2025',
        image: CodeKidsLogo,
        alt: 'CodeKids logo',
        link: 'https://codekids.cs.vt.edu/',
        blurb: 'Redesigned core UI/UX components for the BookEditor web platform with React, improving navigation clarity and editor usability for educators creating digital learning content for K-12 education. Co-led the presentation of the research and BookEditor at Fall 2025 VTURCS Competition, earning 2nd Place for the People’s Choice Award, recognizing the project’s impact on digital education accessibility and user experience.',
        accent: 'accent-emerald',
    },
    {
        category: 'Leadership',
        title: 'ColorStack @ Virginia Tech',
        role: 'Financial Officer',
        period: 'April 2025 - April 2026',
        image: CSVTLogo,
        alt: 'ColorStack VT logo',
        link: 'https://www.colorstack.org/',
        blurb: 'Managed a $6,045.93 budget across two semesters, utilizing a strategic budget plan with forecast presentations, maintaining 100% accurate records, and working closely with the president and executive board to evaluate and approve funding requests aligned with organizational priorities. Led financial planning and reporting, collaborating with board members to support event execution; secured $1,930 via an SEC-provided scholarship for chapter members attending the AfroTech conference and ensured a smooth financial transition to the incoming executive board.',
        accent: 'accent-gold',
    },
]

function Experience() {
    const [expandedIndexes, setExpandedIndexes] = useState(new Set())

    const toggleExpanded = (index) => {
        setExpandedIndexes((current) => {
            const next = new Set(current)
            if (next.has(index)) next.delete(index)
            else next.add(index)
            return next
        })
    }

    return (
        <section className="experience-page">
            <header className="experience-header">
                <p className="eyebrow">My journey so far</p>
                <h1>Experiences</h1>
                <p className="subtle-copy">
                    An overview of my internships, research, and leadership experience.
                </p>
            </header>

            <div className="timeline">
                {experiences.map((item, index) => {
                    const side = index % 2 === 0 ? 'left' : 'right'
                    const isExpanded = expandedIndexes.has(index)

                    return (
                        <article className={`timeline-item ${side}`} key={item.title}>
                            <div className={`timeline-card ${item.accent} ${isExpanded ? 'expanded' : ''}`} role="button" tabIndex={0}
                                onClick={() => toggleExpanded(index)}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter' || event.key === ' ') {
                                        event.preventDefault()
                                        toggleExpanded(index)
                                    }
                                }}
                                aria-expanded={isExpanded}>
                                <div className="timeline-card-body">
                                    <a href={item.link} target="_blank" rel="noreferrer" className="timeline-logo-link">
                                        <img src={item.image} alt={item.alt} className="timeline-logo" />
                                    </a>
                                    <div className="timeline-card-text">
                                        <div className="timeline-card-header">
                                            <h2>{item.title}</h2>
                                        </div>
                                        <h3>{item.role}</h3>
                                        <span className="timeline-entry-period">{item.period}</span>
                                        <p className={`timeline-blurb ${isExpanded ? 'visible' : ''}`}>{item.blurb}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Experience