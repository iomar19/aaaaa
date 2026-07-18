import Reveal from './Reveal'

export default function Showcase() {
  return (
    <section className="showcase">
      <div className="showcase-bg">
        <img src="/volcano-1-2048x1536.jpeg" alt="Workshop" />
        <div className="showcase-overlay" />
      </div>
      <Reveal>
        <div className="showcase-content">
          <h2>
            Quality work.<br />
            <span>Zero compromises.</span>
          </h2>
          <p>Every project is handled with precision, care, and full transparency from start to finish.</p>
        </div>
      </Reveal>
    </section>
  )
}
