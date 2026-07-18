import Reveal from './Reveal'

const services = [
  { icon: 'fas fa-bolt', title: 'Electrical Installation', desc: 'Complete wiring and electrical setup for residential, commercial, and industrial properties.' },
  { icon: 'fas fa-car', title: 'EV Charger Installation', desc: 'Future-proof your home with professionally installed electric vehicle charging points.' },
  { icon: 'fas fa-certificate', title: 'Testing & Certification', desc: 'Full electrical testing, inspections, and certification for landlords and homeowners.' },
  { icon: 'fas fa-house-signal', title: 'Home Automation', desc: 'Smart lighting, thermostats, and integrated home systems at your fingertips.' },
  { icon: 'fas fa-tree', title: 'Garden Lighting', desc: 'Transform your outdoor space with elegant, weather-resistant lighting solutions.' },
  { icon: 'fas fa-shield-halved', title: 'Safety & Compliance', desc: 'Full compliance with UK regulations, keeping your property safe and insured.' },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <Reveal>
          <p className="section-label center">What We Do</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title center">Services built on trust.</h2>
        </Reveal>
        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={0.1 + i * 0.08}>
              <div className="service-card">
                <div className="service-icon">
                  <i className={s.icon} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
