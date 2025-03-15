import React from 'react';
import { faq } from '../JS/faq';
import '../Styles/stylesFaq.css'
const Faq = () => {
  return (
    <div className="faq-container">
      <h1>Preguntas Frecuentes sobre Gymbook</h1>
      {faq.map((item, index) => (
        <details key={index} className="faq-item">
          <summary className="faq-summary">{item.question}</summary>
          <p className="faq-answer">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export default Faq;
