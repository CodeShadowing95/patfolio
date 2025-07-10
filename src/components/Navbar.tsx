import { useEffect, useState } from "react";
import { navLinks } from "../constants"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Fratr.io | Portfolio
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ name, link }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>🙂 On discute ? 📞📧</span>
          </div>
        </a>
      </div>
    </header>
  )
}

export default Navbar