
type ButtonProps = {
  className?: string
  id?: string
  text?: string
}

const Button = ({ className, id, text }: ButtonProps) => {
  return (
    <a id={id} href="#" className={`${className ?? ''} cta-wrapper`}>
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