import Reveal from './Reveal'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-gradient" />
      </div>
      <div className="hero-content">
        <Reveal>
          <p className="hero-eyebrow">Trusted Electricians Since Day One</p>
        </Reveal>
        <Reveal>
          <h1 className="hero-title">
            Powering Homes.<br />
            <span className="hero-highlight">Driving the Future.</span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="hero-subtitle">
            EV Chargers, Home Automation, Garden Lighting & More.
            Serving South East London and Kent.
          </p>
        </Reveal>
        <Reveal>
          <div className="hero-buttons">
            <a href="https://wa.me/201278611290" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Get a Free Quote
            </a>
            <a href="#services" className="btn btn-secondary">
              Explore Services
            </a>
          </div>
        </Reveal>
      </div>
      <div className="hero-scroll">
        <div className="scroll-indicator" />
      </div>
    </section>
  )
}
