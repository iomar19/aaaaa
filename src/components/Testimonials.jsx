import Reveal from './Reveal'

const testimonials = [
  {
    text: '"We regularly use Electric Workshop for repairs and improvements in our office space and warehouse. Michael is a pleasure to deal with, works to the quote and is quick, efficient and tidy. Would highly recommend."',
    name: 'James R.',
    role: 'Commercial Client',
    initial: 'J',
  },
  {
    text: '"Excellent service once again from Michael and Louis. They are highly reliable and professional and their work is always excellent. Thanks very much!"',
    name: 'Sarah M.',
    role: 'Residential Client',
    initial: 'S',
  },
  {
    text: '"Michael and Lewis did an excellent job with our electrical work. They were professional, efficient, careful around our home, and very easy to work with. Highly recommend!"',
    name: 'David K.',
    role: 'Homeowner',
    initial: 'D',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <Reveal>
          <p className="section-label center">Testimonials</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title center">What our clients say.</h2>
        </Reveal>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={0.15 + i * 0.1}>
              <div className="testimonial-card">
                <div className="stars">
                  {[...Array(5)].map((_, j) => (
                    <i key={j} className="fas fa-star" />
                  ))}
                </div>
                <p>{t.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.initial}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
