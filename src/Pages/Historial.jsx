import React from 'react';
import NavBar from '../Components/NavBar';
import '../Styles/stylesHistorial.css';
import { historyDocumentation } from '../Historial/historial.js';

const Historial = () => {
  return (
    <>
      <NavBar />
      <div className="historial-container">
        {/* Resumen Ejecutivo */}
        <section className="executive-summary">
          <h2>Resumen Ejecutivo</h2>
          <p className="description">
            {historyDocumentation.executiveSummary.description}
          </p>
          <p className="objectives">
            <strong>Objetivos:</strong> {historyDocumentation.executiveSummary.objectives}
          </p>
        </section>

        {/* Cronología de Eventos */}
        <section className="chronology">
          <h2>Cronología de Eventos</h2>
          <ul>
            {historyDocumentation.chronology.map((event, index) => (
              <li key={index} className="event">
                <span className="event-date">{event.date}</span>
                <h3 className="event-title">{event.event}</h3>
                <p className="event-description">{event.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Estados y Transiciones */}
        <section className="states-transitions">
          <h2>Estados y Transiciones</h2>
          <ul>
            {historyDocumentation.statesTransitions.map((state, index) => (
              <li key={index} className="state">
                <h3 className="state-name">{state.state}</h3>
                <p className="state-dates">
                  {state.startDate} - {state.endDate}
                </p>
                <p className="state-trigger">
                  <strong>Trigger:</strong> {state.trigger}
                </p>
                <p className="state-details">{state.details}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Detalles Técnicos y Funcionales */}
        <section className="technical-details">
          <h2>Detalles Técnicos y Funcionales</h2>
          <ul>
            {historyDocumentation.technicalDetails.updates.map((update, index) => (
              <li key={index} className="technical-update">
                <span className="update-date">{update.date}</span>
                <h3 className="update-title">{update.update}</h3>
                <p className="update-technologies">
                  <strong>Tecnologías:</strong> {update.technologies.join(', ')}
                </p>
                <p className="update-reason">
                  <strong>Razón:</strong> {update.reason}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Impacto y Métricas */}
        {/* <section className="impact-metrics">
          <h2>Impacto y Métricas</h2>
          <ul>
            {historyDocumentation.impactMetrics.map((metric, index) => (
              <li key={index} className="metric">
                <span className="metric-date">{metric.date}</span>
                <h3 className="metric-title">{metric.metric}</h3>
                <p className="metric-before">
                  <strong>Antes:</strong> {metric.before}
                </p>
                <p className="metric-after">
                  <strong>Después:</strong> {metric.after}
                </p>
                <p className="metric-analysis">{metric.analysis}</p>
              </li>
            ))}
          </ul>
        </section> */}

        {/* Plan de Futuro */}
        <section className="future-plan">
          <h2>Plan de Futuro</h2>
          <div className="upcoming-updates">
            <h3>Próximas Actualizaciones</h3>
            <ul>
              {historyDocumentation.futurePlan.upcomingUpdates.map((update, index) => (
                <li key={index}>
                  <span className="planned-date">{update.plannedDate}</span>
                  <h4 className="future-update-title">{update.update}</h4>
                  <h5 className='update-state'>{update.state}</h5>
                  <p className="future-update-description">{update.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="scalability-strategy">
            <h3>Estrategia de Escalabilidad</h3>
            <p>{historyDocumentation.futurePlan.scalabilityStrategy}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Historial;
