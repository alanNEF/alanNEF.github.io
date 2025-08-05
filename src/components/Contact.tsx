'use client';

export default function Contact() {
  return (
    <div className="container" id="contact-me">
      {/* Section Header */}
      <div className="section-header fade-in-up">
        <h1>Get In Touch</h1>
        <div className="section-underline"></div>
      </div>

      <div id="contact-body" className="scale-in">
        <form action="https://api.web3forms.com/submit" method="POST" id="contact-form">
          <input type="hidden" name="access_key" value="17def0b9-6b63-4f1d-a97d-1d25b9232b7a" />

          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input required type="text" name="name" id="name" placeholder="Your full name" />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input type="text" name="company" id="company" placeholder="Your company name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input required type="email" name="email" id="email" placeholder="your.email@example.com" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea required name="Message" id="message" placeholder="Tell me about your project or opportunity..." rows={5}></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
} 