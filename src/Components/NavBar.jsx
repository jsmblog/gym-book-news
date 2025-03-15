import React, { useEffect, useState } from 'react'
import '../Styles/stylesNavBar.css'
import { Link } from 'react-router-dom';
const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
  return (
    <header className={scrolled ? "header-scrolled" : ""}>
        <nav>
            <ul>
                <Link to="/"><li>Inicio</li></Link> 
                <Link to="/blog"><li>Blog</li></Link>
                <Link to="/historial"><li>Historial</li></Link>
            </ul>
        </nav>
        <button className='go-to-web'>
        <a href="https://gym-book.netlify.app/" target="_blank" rel="noopener noreferrer">
        Ir a GymBook →
        </a>
        </button>
    </header>
  )
}

export default NavBar