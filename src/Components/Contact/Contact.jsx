import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Contact.css'

gsap.registerPlugin(ScrollTrigger)

function Contact() {
  const contactRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-label', {
        scrollTrigger: {
          trigger: '.contact',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      })

      gsap.from('.contact-title', {
        scrollTrigger: {
          trigger: '.contact',
          start: 'top 70%',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      })

      gsap.from('.contact-links', {
        scrollTrigger: {
          trigger: '.contact-links',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
      gsap.from('.contact-footer', {
  scrollTrigger: {
    trigger: '.contact-footer',
    start: 'top 90%',
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: 'power3.out',
})
    }, contactRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="contact" id="contact" ref={contactRef}>
      <div className="contact-label">
        <span>// GET IN TOUCH</span>
        <span>04 / 05</span>
      </div>

      <div className="contact-content">
        <p className="contact-small">
          HAVE A PROJECT IN MIND?
        </p>

        <h2 className="contact-title">
          LET'S
          <br />
          TALK.
        </h2>

        <a
          href="mailto:pratyushbarick47@gmail.com"
          className="contact-email"
        >
          pratyushbarick47@gmail.com
          <span>↗</span>
        </a>
      </div>

      <div className="contact-footer">

  <div className="contact-footer-top contact-reveal">
    <div className="contact-status">
      <span className="status-dot"></span>
      <span>AVAILABLE FOR WORK</span>
    </div>

    <span>BHUBANESWAR, INDIA</span>
  </div>

  <div className="contact-marquee contact-reveal">
    <div className="contact-marquee-track">
      <span>LET'S BUILD SOMETHING GREAT</span>
      
    </div>
  </div>
<div className="contact-footer-bottom contact-reveal">

    <div className="contact-socials">
      <a
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
      >
        GitHub ↗
      </a>

      <a
        href="https://linkedin.com/in/pratyush-barick-6a25b131b/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn ↗
      </a>

      <a href="mailto:pratyushbarick47@gmail.com">
        Email ↗
      </a>
    </div>

    <span>© 2026 PRATYUSH</span>

  </div>

</div>

    </section>
  )
}

export default Contact