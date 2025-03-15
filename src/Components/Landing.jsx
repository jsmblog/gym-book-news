import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import '../Styles/stylesLanding.css'
import { CARD_INFO } from '../JS/info.js'
import Footer from './Footer'
import Faq from './Faq'
const Landing = () => {
  const [messageDisplay, setMessageDisplay] = useState('');
  const message = 'Donde los apasionados del fitness se encuentran.';
  
  useEffect(() => {
    let index = 0 ;
    const interval = setInterval(() => {
      if(index <= message.length){
        setMessageDisplay(message.substring(0,index));
        index++;
      }else {
        clearInterval(interval)
      }
    }, 100);
    return () => clearInterval(interval);
  }, [])
  return (
    <>
    <NavBar />
      <main id='main-app' className='main-landing'>
        <h1 id='name' className='merriweather-bold'>GymBook</h1>
        <p>{messageDisplay}</p>
      </main>
      <section className='sect-info'>
        <h2 className='merriweather-bold'>¿Qué ofrece GymBook?</h2>
        <div className="cards-container">
          {
            CARD_INFO.map((card, index) => (
              <div className="card" key={index}>
                <h3>{card.tittle}</h3>
                <p>{card.description}</p>
              </div>
            ))
          }
        </div>
      </section>
      <Faq/>
      <Footer/>
    </>
  )
}

export default Landing