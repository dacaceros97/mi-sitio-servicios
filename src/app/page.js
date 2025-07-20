import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className={styles.heroHeader}>
        <h1>¡Domina el Inglés con Nuestras Mentorías Personalizadas!</h1>
        <p>Tu camino hacia la fluidez y la confianza en el inglés comienza aquí.</p>
        <Link href="/agendar" className={styles.ctaButton}>Agenda tu Sesión Ahora</Link>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.serviceSection}>
          <h2>Nuestras Mentorías Incluyen:</h2>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <h3>Inglés de Negocios</h3>
              <p>Clases enfocadas en vocabulario, presentaciones y negociación para el ámbito profesional.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Preparación de Exámenes</h3>
              <p>Guía especializada para TOEFL, IELTS, Cambridge y otros exámenes de proficiencia.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Conversación Fluida</h3>
              <p>Sesiones dinámicas para mejorar tu pronunciación, entonación y confianza al hablar.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Gramática y Escritura</h3>
              <p>Perfecciona tus habilidades gramaticales y aprende a redactar textos claros y efectivos.</p>
            </div>
          </div>
        </section>
        <section className={styles.testimonialsSection}>
          <h2>Historias de Éxito de Nuestros Estudiantes</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p>"Gracias a las mentorías, pude pasar mi examen TOEFL con una puntuación excelente. ¡Totalmente recomendado!"</p>
              <span>— María G., Abogada</span>
            </div>
            <div className={styles.testimonialCard}>
              <p>"Mi fluidez en las reuniones de trabajo ha mejorado drásticamente. Las sesiones son muy prácticas y personalizadas."</p>
              <span>— Juan P., Gerente de Proyectos</span>
            </div>
            <div className={styles.testimonialCard}>
              <p>"Siempre me sentí cómodo haciendo preguntas y explorando nuevos temas. Ahora hablo inglés con mucha más confianza."</p>
              <span>— Sofía L., Estudiante Universitaria</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}