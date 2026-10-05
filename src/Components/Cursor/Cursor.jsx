import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Cursor.css'

function Cursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: 'power2.out',
      })
    }

    const handleEnter = (e) => {
      gsap.to(cursor, {
        width: 28,
        height: 28,
        duration: 0.25,
        ease: 'power2.out',
      })

      gsap.to(e.currentTarget, {
        y: -2,
        duration: 0.25,
        ease: 'power2.out',
      })
    }

    const handleLeave = (e) => {
      gsap.to(cursor, {
        width: 13,
        height: 13,
        duration: 0.25,
        ease: 'power2.out',
      })

      gsap.to(e.currentTarget, {
        y: 0,
        duration: 0.25,
        ease: 'power2.out',
      })
    }

    window.addEventListener('mousemove', moveCursor)

    const interactiveElements = document.querySelectorAll(
      'a, button, .project-card'
    )

    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleEnter)
      element.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)

      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleEnter)
        element.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [])

  return <div ref={cursorRef} className="custom-cursor" />
}

export default Cursor