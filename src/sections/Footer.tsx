import { socialImgs } from "../constants"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <a href="/">Visit my blog</a>
        </div>
        <div className="socials">
          {socialImgs.map((img: { name: string, imgPath: string, url: string }) => (
            <a href={img.url} className="icon" target="_blank" key={img.name}>
              <img src={img.imgPath} alt={img.name} />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            &copy; {new Date().getFullYear()} Fratr.io | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer