import { useState } from 'react'

function Contact() {
    const recipientEmail = 'nathnaelmecuria@gmail.com'

    const [formData, setFormData] = useState({
        to: recipientEmail,
        from: '',
        subject: '',
        body: '',
    })

    const [statusMessage, setStatusMessage] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!formData.from.trim() || !formData.subject.trim() || !formData.body.trim()) {
            setStatusMessage('Please complete your email, subject, and message before sending.')
            return
        }

        // const emailBody = `From: ${formData.from}\n\n${formData.body}`
        const emailBody = `${formData.body}`
        const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`

        window.location.href = mailtoLink
        setStatusMessage('Your email app should open with a new message ready to send.')
    }

    return (
        <section className="contact-page">
            <div className="contact-card">
                <div className="contact-header">
                    <p className="eyebrow">Let's get in touch</p>
                    <h1>Contact</h1>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>
                        <span>To</span>
                        <input
                            type="email"
                            name="to"
                            value={formData.to}
                            readOnly
                        />
                    </label>

                    <label>
                        <span>From</span>
                        <input
                            type="email"
                            name="from"
                            value={formData.from}
                            placeholder="your.email@example.com"
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        <span>Subject</span>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            placeholder="Brief topic or reason for reaching out"
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        <span>Message</span>
                        <textarea
                            name="body"
                            value={formData.body}
                            rows="10"
                            placeholder="Write your message here..."
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <button type="submit" className="contact-submit">
                        Send
                    </button>

                    {statusMessage && (
                        <p className="contact-status" role="status">
                            {statusMessage}
                        </p>
                    )}
                </form>
            </div>
        </section>
    )
}

export default Contact