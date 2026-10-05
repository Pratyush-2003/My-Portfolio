import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Work.css'

gsap.registerPlugin(ScrollTrigger)

function Work() {
  const workRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.work-header', {
        scrollTrigger: {
          trigger: '.work',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })

      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: '.projects',
          start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power4.out',
      })
    }, workRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
  const cards = document.querySelectorAll('.project-card')

  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const moveX = (x / rect.width - 0.5) * 10
    const moveY = (y / rect.height - 0.5) * 10

    gsap.to(card, {
      x: moveX,
      y: moveY,
      duration: 0.4,
      ease: 'power2.out',
    })
  }

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
    })
  }

  cards.forEach((card) => {
    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)
  })

  return () => {
    cards.forEach((card) => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    })
  }
}, [])

  return (
    <section className="work" id="work" ref={workRef}>
      <div className="work-header">
        <div>
          <span className="section-label">// SELECTED WORK</span>
          <h2>PROJECTS.</h2>
        </div>

        <span className="work-number">02 / 05</span>
      </div>

      <div className="projects">

        <article className="project-card">
          <div className="project-image project-one">
             <img src="/images/Projects/solor.png" alt="SOLOR Project" />
            <span>01</span>
          </div>

          <div className="project-info">
            <div>
              <h3>Solar Energy</h3>
              <p>React / JavaScript / GSAP</p>
            </div>

            <span className="project-arrow">↗</span>
          </div>
        </article>

        <article className="project-card">
          <div className="project-image project-two">
             <img src="/images/Projects/company-map.png" alt="Company Map" />
              <span>02</span>
             
            
          </div>

          <div className="project-info">
            <div>
              <h3>Company Map</h3>
              <p>React / Maps / JavaScript</p>
            </div>

            <span className="project-arrow">↗</span>
          </div>
        </article>

        <article className="project-card">
          <div className="project-image project-three">
             <img src="/images/Projects/expense-tracker.png" alt="Expense Tracker" />
            <span>03</span>
          </div>

          <div className="project-info">
            <div>
              <h3>Expense Tracker</h3>
              <p>HTML / CSS / JavaScript</p>
            </div>

            <span className="project-arrow">↗</span>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Work