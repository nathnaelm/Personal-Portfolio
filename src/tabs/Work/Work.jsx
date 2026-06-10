import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function Work() {
    const [count, setCount] = useState(0)
    const [currentTab, setCurrentTab] = useState('home')

    return (
        <div>
            <h1>Home</h1>
            <p>Previous experience.</p>
        </div>
    )

}

export default Work