import './globals.css';
import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Mentorías de Inglés - Tu Camino a la Fluidez',
  description: 'Mentorías de inglés personalizadas para mejorar tu fluidez y confianza. ¡Agenda tu sesión hoy!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className={styles.container}>
          <header className={styles.headerLayout}>
            <nav className={styles.navbar}>
              <Link href="/" className={styles.logo}>
                Mentorías de Inglés
              </Link>
              <ul className={styles.navLinks}>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/agendar">Agendar Cita</Link></li>
              </ul>
            </nav>
          </header>

          {children}

          <footer className={styles.footerLayout}>
            <p>© {new Date().getFullYear()} Mentorías de Inglés. Todos los derechos reservados.</p>
            <p>Contacto: info@tumentorias.com | Teléfono: +502 1234-5678</p>
          </footer>
        </div>
      </body>
    </html>
  );
}