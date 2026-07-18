import { useState } from 'react'
import Reveal from './Reveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:345tsf@gmail.com?subject=${subject}&body=${body}`
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <Reveal>
              <p className="section-label">Get In Touch</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-title">
                Let's talk about<br />your project.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="section-desc">
                Email or call us for a free quote. We'll get back to you as soon as we can.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <a
                href="https://wa.me/201278611290"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary contact-btn"
              >
                <i className="fab fa-whatsapp" /> Chat on WhatsApp
              </a>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-phone" />
                  <span>+20 127 861 1290</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope" />
                  <span>345tsf@gmail.com</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-location-dot" />
                  <span>10 Leamington Ave, Bromley, BR1 5BL</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-full">
                  Send Message
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
