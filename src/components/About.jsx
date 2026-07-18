import Reveal from './Reveal'
import { useCounter } from '../hooks/useAnimations'

function Stat({ target, suffix, label }) {
  const { ref, count } = useCounter(target)
  return (
    <div className="stat" ref={ref}>
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <span className="stat-number">{count}</span>
        <span className="stat-plus">{suffix}</span>
      </div>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <Reveal>
              <p className="section-label">About Us</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-title">
                Electrical excellence<br />for every sector.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="section-desc">
                From residential homes to commercial offices and industrial facilities,
                Abo Omar Workshop delivers reliable, certified electrical solutions
                backed by years of experience and professional craftsmanship.
              </p>
            </Reveal>
            <div className="about-stats">
              <Reveal delay={0.3}>
                <Stat target={500} suffix="+" label="Projects Completed" />
              </Reveal>
              <Reveal delay={0.4}>
                <Stat target={15} suffix="+" label="Years Experience" />
              </Reveal>
              <Reveal delay={0.5}>
                <Stat target={100} suffix="%" label="Customer Satisfaction" />
              </Reveal>
            </div>
          </div>
          <Reveal delay={0.2}>
            <div className="about-images">
              <div className="about-img-card">
                <img src="/napit-2.png" alt="Certification" />
              </div>
              <div className="about-img-card">
                <img src="/napit.png" alt="Certification" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
