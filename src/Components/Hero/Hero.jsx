import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import HeroVisual from '../HeroVisual/HeroVisual'
import './Hero.css'

function Hero() {
  const heroRef = useRef(null)
  useEffect(() => {
  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20
    const y = (e.clientY / window.innerHeight - 0.5) * 20

    gsap.to('.hero-visual', {
      x,
      y,
      duration: 1,
      ease: 'power3.out',
    })
  }

  window.addEventListener('mousemove', handleMouseMove)

  return () => {
    window.removeEventListener('mousemove', handleMouseMove)
  }
}, [])
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.from('.hero-label', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      })
        .from(
          '.hero h1',
          {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
          },
          '-=0.35'
        )
        .from(
          '.hero-description',
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .from(
          '.hero-actions',
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .from(
          '.hero-bottom',
          {
            opacity: 0,
            duration: 0.6,
          },
          '-=0.3'
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" ref={heroRef}>
        <HeroVisual />
      <div className="hero-content">

        <p className="hero-label">
          FRONTEND DEVELOPER
        </p>

        <h1>
          I BUILD
          <br />
          DIGITAL
          <br />
          EXPERIENCES.
        </h1>

        <p className="hero-description">
          I create modern, responsive websites with clean design,
          smooth interactions, and meaningful user experiences.
        </p>

        <div className="hero-actions">
          <a href="#work" className="hero-primary">
            View My Work <span>↗</span>
          </a>

          <a href="#contact" className="hero-secondary">
            Let's Talk
          </a>
        </div>

      </div>

      <div className="hero-bottom">
        <span>SCROLL TO EXPLORE</span>
        <span className="hero-arrow">↓</span>
      </div>
    </section>
  )
}

export default Hero