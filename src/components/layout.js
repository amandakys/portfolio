import React from "react"
import { Link } from "gatsby"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home nav-current" role="menuitem">
                <Link to={`/`}>Home</Link>
              </li>
              <li className="nav-case-studies" role="menuitem">
                <Link to={`/caseStudies`}>Case Studies</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>About</Link>
              </li>
            </ul>
          </nav>

          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://github.com/amandakys"
                title="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://uk.linkedin.com/in/amandakys"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/ataraxdesign"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
        </div>
        <div className="site-head-logo-container">
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} Amanda Koh
      </footer>
    </div>
  )
}

export default Layout
