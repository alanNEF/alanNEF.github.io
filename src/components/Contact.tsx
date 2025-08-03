'use client';

export default function Contact() {
  return (
    <div className="container hidden" id="contact-me">
      <h1 className="hidden">Contact Me</h1>
      <div id="contact-body" className="hidden">
        <form action="https://api.web3forms.com/submit" method="POST" id="contact-form">
          <input type="hidden" name="access_key" value="17def0b9-6b63-4f1d-a97d-1d25b9232b7a" />

          <div className="form-sections">
            <input required type="text" name="name" id="name" placeholder="Your Name" />
          </div>

          <div className="form-sections">
            <input required type="email" name="email" id="email" placeholder="Your Email" />
          </div>

          <div className="form-sections">
            <label htmlFor="message">Message</label>
            <textarea name="Message" id="message" placeholder="Your Message"></textarea>
          </div>

          <input type="submit" value="Connect" id="submit" />
        </form>

        <div id="greeting" className="hidden">
          <h1 id="hello">Its nice to meet you, feel free to get in touch! &#128075;</h1>
          <h1 className="slider-wrapper">
            Lets
            <div className="slider">
              <div className="slider-text1">Connect</div>
              <div className="slider-text">Chat</div>
              <div className="slider-text">Collaborate</div>
              <div className="slider-text">Meet</div>
            </div>!
          </h1>
        </div>
      </div>
    </div>
  );
} 