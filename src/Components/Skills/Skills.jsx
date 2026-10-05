import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Skills.css'

gsap.registerPlugin(ScrollTrigger)

function Skills() {
  const skillsRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skills-heading', {
        scrollTrigger: {
          trigger: '.skills',
          start: 'top 80%',
        },
        y: 80,
        opacity: 0,
        duration: 0.9,
        ease: 'power4.out',
      })

      gsap.from('.skill-item', {
        scrollTrigger: {
          trigger: '.skills-list',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      })
    }, skillsRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="skills" id="skills" ref={skillsRef}>
      <div className="skills-top">
        <span>// EXPERTISE</span>
        <span>03 / 05</span>
      </div>

      <div className="skills-heading">
        <h2>
          TOOLS
          <br />
          &amp; SKILLS.
        </h2>

        <p>
          Technologies I use to turn ideas into
          functional digital experiences.
        </p>
      </div>

      <div className="skills-list">
        <div className="skill-item">
          <span>01</span>
          <h3>HTML / CSS</h3>
          <span>FRONTEND</span>
        </div>

        <div className="skill-item">
          <span>02</span>
          <h3>JavaScript</h3>
          <span>LANGUAGE</span>
        </div>

        <div className="skill-item">
          <span>03</span>
          <h3>React</h3>
          <span>FRAMEWORK</span>
        </div>

        <div className="skill-item">
          <span>04</span>
          <h3>GSAP</h3>
          <span>ANIMATION</span>
        </div>

        <div className="skill-item">
          <span>05</span>
          <h3>Git / GitHub</h3>
          <span>TOOLS</span>
        </div>
      </div>
    </section>
  )
}

export default Skills