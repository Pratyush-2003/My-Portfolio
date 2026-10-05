import './HeroVisual.css'

function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-orbit hero-orbit-one">
        <span className="orbit-dot"></span>
      </div>

      <div className="hero-orbit hero-orbit-two">
        <span className="orbit-dot orbit-dot-two"></span>
      </div>

      <div className="hero-glow"></div>
    </div>
  )
}

export default HeroVisual