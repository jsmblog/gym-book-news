import { useState } from 'react';
import { USER_CARDS, OWNER_CARDS } from '../JS/info.js'
import GoPage from './GoPage.jsx';

const Info = () => {
    const [activeTab, setActiveTab] = useState('usuarios');
    const [fade, setFade] = useState(false);

    const handleTabChange = (tab) => {
        if (tab !== activeTab) {
          setFade(true);
          setTimeout(() => {
            setActiveTab(tab);
            setFade(false);
          }, 300);
        }
      };
    
    const cardsToDisplay = activeTab === 'usuarios' ? USER_CARDS : OWNER_CARDS;
    
  return (
    <>

      <section className='sect-info'>
        <h2 className='merriweather-bold'>¿Qué ofrece GymBook?</h2>
        <div className="tabs">
          <button 
            className={activeTab === 'usuarios' ? 'active' : ''}
            onClick={() => handleTabChange('usuarios')}
          >
            Usuarios
          </button>
          <button 
            className={activeTab === 'propietarios' ? 'active' : ''}
            onClick={() => handleTabChange('propietarios')}
          >
            Propietarios e Instructores
          </button>
        </div>
        <div className={`cards-container ${fade ? 'fade' : 'fade-in'}`}>
          { cardsToDisplay.map((card, index) => (
              <div className="card" key={index}>
                <h3>{card.tittle}</h3>
                <p>{card.description}</p>
              </div>
            ))
          }
        </div>
        <GoPage/>
      </section>
    </>
  )
}

export default Info