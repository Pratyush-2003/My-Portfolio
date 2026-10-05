import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

function About() {
  const aboutRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-top', {
        scrollTrigger: {
          trigger: '.about',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      })

      gsap.to('.about-title span', {
  scrollTrigger: {
    trigger: '.about-title',
    start: 'top 75%',
  },
  y: 0,
  duration: 1,
  stagger: 0.12,
  ease: 'power4.out',
})

      gsap.from('.about-text', {
        scrollTrigger: {
          trigger: '.about-text',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
    }, aboutRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="about-top">
        <span>// ABOUT ME</span>
        <span>01 / 05</span>
      </div>

      <div className="about-content">
    <h2 className="about-title">
  <span>I BUILD</span>
  <span>DIGITAL</span>
  <span>PRODUCTS.</span>
</h2>

        <div className="about-text">
  <p>
    I'm a passionate and hardworking frontend developer
    who enjoys turning ideas into clean, responsive,
    and engaging websites.
  </p>

  <p>
    I build modern interfaces with attention to detail,
    focusing on smooth interactions, thoughtful design,
    and a simple user experience.
  </p>

  <p>
    I'm always learning, improving my skills, and exploring
    better ways to build for the web.
  </p>
</div>
      </div>
      <div className="about-marquee">
  <div className="about-marquee-track">
    <div className="about-skill-card">HTML / CSS</div>
    <div className="about-skill-card">JavaScript</div>
    <div className="about-skill-card">React</div>
    <div className="about-skill-card">GSAP</div>
    <div className="about-skill-card">Git / GitHub</div>

    <div className="about-skill-card">HTML / CSS</div>
    <div className="about-skill-card">JavaScript</div>
    <div className="about-skill-card">React</div>
    <div className="about-skill-card">GSAP</div>
    <div className="about-skill-card">Git / GitHub</div>
  </div>
</div>
    </section>
  )
}

export default About