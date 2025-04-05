import React, { useEffect, useState } from 'react'
import '../Styles/stylesNavBar.css'
import { Link } from 'react-router-dom';
import GoPage from './GoPage';
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
        <GoPage/>
    </header>
  )
}

export default NavBar