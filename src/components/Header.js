import '../css/Header.css'

function Header(){

  return (
    <nav className="navbar">
        <div className="logo">
          <h5>Yaroslav (Yaro) Volvach</h5>
        </div>
        <div className="nav-elements">

            <a id="about-nav" className='link' href="#/">About Me</a>
            
            <a id="portfolio-nav" className='link' href="#/portfolio">Portfolio</a>
           
            <a id="contact-nav" className='link' href="#/contact">Contact</a>
            
            <a id="resume-nav" className='link'href="#/resume">Resume</a>
        </div>
    </nav>
  )
}

export default Header