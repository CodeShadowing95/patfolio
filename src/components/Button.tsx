
type ButtonProps = {
  className?: string
  id?: string
  text?: string
}

const Button = ({ className, id, text }: ButtonProps) => {

  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault()

    const target = document.getElementById('counter')

    if (target && id) {
      const offset = window.innerHeight * 0.15

      const top = target.getBoundingClientRect().top + window.scrollY - offset

      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <a
      onClick={handleScroll}
      id={id}
      className={`${className ?? ''} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text ?? 'En savoir plus'}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" className="" />
        </div>
      </div>
    </a>
  )
}

export default Button