export const historyDocumentation = {
    executiveSummary: {
      description: "Encuentra el gimnasio perfecto e instructores cercanos a ti, descubre servicios y tarifas únicas, y únete a una comunidad apasionada por el fitness. Comparte tus logros, recibe consejos de expertos y despeja tus dudas; si eres instructor o propietario, atrae nuevos clientes para potenciar tu éxito.",
      objectives: "Documentar la evolución y cambios significativos, permitiendo identificar mejoras, estrategias de escalabilidad y la evolución técnica y funcional de la web."
    },
    chronology: [
      {
        date: "2025-03-24",
        event: "Lanzamiento Beta",
        description: "La página se lanzó al público con un diseño responsivo y funcionalidades básicas."
      },
      {
        date: "2025-03-15",
        event: "Actualización de seguridad",
        description: "Se implementaron mejoras en la infraestructura de seguridad para proteger los datos de los usuarios."
      }
    ],
    statesTransitions: [
      {
        state: "Beta",
        startDate: "2025-01-24",
        endDate: "2025-01-24",
        trigger: "Versión beta para usuarios selectos",
        details: "Recopilación de feedback y ajustes en base a las primeras experiencias reales."
      },
      {
        state: "Lanzamiento",
        startDate: "2025-01-24",
        endDate: "2025-01-30",
        trigger: "Lanzamiento oficial",
        details: "Periodo de producción con monitoreo continuo y ajustes en tiempo real."
      },
      {
        state: "Mantenimiento",
        startDate: "2025-02-15",
        endDate: "Presente",
        trigger: "Actualizaciones periódicas y mejoras continuas",
        details: "Fase orientada a la optimización y escalabilidad de la plataforma."
      }
    ],
    technicalDetails: {
      updates: [
        {
          date: "2025-02-01",
          update: "Optimización de rendimiento y escalabilidad",
          technologies: ["Vite", "Cloud Firestore", "React"],
          reason: "Mejorar tiempos de respuesta y garantizar una experiencia fluida para los usuarios en el Marketplace."
        }
      ]
    },
    impactMetrics: [
      {
        date: "2025-03-15",
        metric: "Tráfico web",
        before: "100 visitas/día",
        after: "200 visitas/día",
        analysis: "El lanzamiento oficial generó un incremento significativo en el tráfico de la web."
      },
      {
        date: "2022-03-05",
        metric: "Tasa de conversión",
        before: "2%",
        after: "4%",
        analysis: "El rediseño incrementó la conversión, mejorando la interacción del usuario con la plataforma."
      }
    ],
    futurePlan: {
      upcomingUpdates: [
        {
          plannedDate: "Próximamente",
          update: "Implementación de API de rutinas de ejercicios",
          state: "En revisión",
          description: "Integración de una API que proporciona información detallada sobre cómo realizar ejercicios específicos para distintas partes del cuerpo. Incluirá guías paso a paso, ilustraciones y recomendaciones para optimizar la ejecución y evitar lesiones."
        },
        {
          plannedDate: "Próximamente",
          update: "Integración de Marketplace",
          state: "En revisión",
          description: "Implementación de un Marketplace dentro de la plataforma, permitiendo a los usuarios acceder a productos y servicios relacionados con el fitness. Incluirá la compra de suplementos, equipamiento deportivo, planes de entrenamiento personalizados y acceso a entrenadores certificados."
        }               
      ],
      scalabilityStrategy: "Adoptar una arquitectura modular que permita la incorporación de nuevas tecnologías y funcionalidades sin afectar la estabilidad de la plataforma."
    }
  };
  