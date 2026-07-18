export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/electricworkshop-logo-red-and-blue.svg" alt="Abo Omar" />
              <span>Abo Omar Workshop</span>
            </div>
            <p>Trusted electricians for EV chargers, home automation, garden lighting & more.</p>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <a href="#services">Electrical Installation</a>
            <a href="#services">EV Charger</a>
            <a href="#services">Testing & Certification</a>
            <a href="#services">Home Automation</a>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a href="https://wa.me/201278611290" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp" /> WhatsApp
            </a>
            <a href="#"><i className="fab fa-facebook" /> Facebook</a>
            <a href="#"><i className="fab fa-instagram" /> Instagram</a>
            <a href="#"><i className="fab fa-google" /> Google</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Abo Omar Workshop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
