import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import MALogo from '../../assets/MALogo.png'
import AfDBLogo from '../../assets/AfDBLogo.png'
import CodeKidsLogo from '../../assets/CodeKidsLogo.jpg'
import CSVTLogo from '../../assets/CSVTLogo.png'


function Experience() {
    const [count, setCount] = useState(0)
    const [currentTab, setCurrentTab] = useState('home')

    return (
        <div>
            {/* work experience div*/}
            <div>
                <h1> Work Experience </h1>

                {/* swe intern div*/}
                <div>
                    <h4> Motsepe Advertising Agency </h4>
                    <h5> Software Engineer Intern (May 2025 - August 2025)</h5>
                    <a href="https://www.motsepeadvertising.com/" target="_blank" rel="noreferrer">
                        <img src={MALogo} className="MA logo" alt="Motsepe Advertising logo" />
                    </a>
                    <p> Deployed a centralized team car booking system leveraging React Native, Expo Router, and Supabase, enabling
                        staff to schedule, modify, and cancel trips with live calendar synchronization for full team visibility.
                        Integrated Supabase backend for authentication, bookings, and inspection data, leveraging storage buckets and
                        PostgreSQL to allow users to upload pre-trip and post-trip inspection images, ensuring vehicle damage prevention.
                        Designed user profile and strike tracking features with Supabase Auth, displaying trip history, violation counts, and
                        activity logs, reducing car management times by 20% for the CEO and setting new standard practices.</p>
                </div>

                {/* ai intern div*/}
                <div>
                    <h4> African Development Bank (AfDB) </h4>
                    <h5> AI Solutions Engineer Intern (May 2025 - Aug 2025) </h5>
                    <a href="https://www.afdb.org/en/" target="_blank" rel="noreferrer">
                        <img src={AfDBLogo} className="AfDB logo" alt="African Development Bank logo" />
                    </a>
                    <p> Built AI automation workflows in n8n, relying on local LLMs, REST APIs, and custom connectors to reduce manual
                        document handling; solutions were approved by senior management, expediting document analysis by 11% .
                        Implemented vector-based semantic search using Chroma and PostgreSQL, optimizing local LLM retrieval pipelines
                        and improving query accuracy for company documentation.</p>
                </div>

            </div>

            {/* research div*/}
            <div>
                <h1> Research Experience </h1>
                <h4> CodeKids Research</h4>
                <h5> Virginia Tech (Aug 2025 - Dec 2025)</h5>
                <a href="https://codekids.cs.vt.edu/" target="_blank" rel="noreferrer">
                    <img src={CodeKidsLogo} className="CodeKids logo" alt="CodeKids logo" />
                </a>
                <p> Redesigned core UI/UX components for the BookEditor web platform with React, improving navigation clarity and
                    editor usability for educators creating digital learning content for K-12 education.
                    Co-led the presentation of the research and BookEditor at Fall 2025 VTURCS Competition, earning 2nd Place for
                    the People’s Choice Award, recognizing the project’s impact on digital education accessibility and user experience.</p>
            </div>

            {/* leadership div*/}
            <div>
                <h1> Leadership Experience </h1>
                <h4> ColorStack @Virginia Tech</h4>
                <h5> Financial Officer (April 2025 - April 2026)</h5>
                <img src={CSVTLogo} className="ColorstackVT logo" alt="ColorstackVT logo" />

                <p> Managed a $6,045.93 budget across two semesters, utilizing a strategic budget plan with forecast presentations,
                    maintaining 100% accurate records, and working closely with the president and executive board to evaluate and
                    approve funding requests aligned with organizational priorities.
                    Led financial planning and reporting, collaborating with board members to support event execution; secured $1,930
                    via an SEC-provided scholarship for chapter members attending the AfroTech conference and ensured a smooth
                    financial transition to the incoming executive board.</p>
            </div>
        </div>
    )

}

export default Experience