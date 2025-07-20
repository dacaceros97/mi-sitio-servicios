# Mentorías de Inglés - Frontend

Este es el repositorio del frontend de la aplicación "Mentorías de Inglés", construida con **Next.js 14+** y diseñada para ofrecer una experiencia de usuario fluida y responsiva para agendar y gestionar sesiones de mentoría.

---

## 🛠️ Tecnologías Utilizadas

- **Next.js 14+ (App Router):** Un potente framework de React para construir aplicaciones web de alto rendimiento.
- **React.js:** La librería base para construir la interfaz de usuario.
- **CSS Modules:** Para encapsular y modularizar los estilos CSS, previniendo conflictos y facilitando el mantenimiento.
- **CSS Variables:** Implementación de temas claro/oscuro para una experiencia visual adaptativa basada en las preferencias del sistema.
- **Responsiveness (Media Queries, Flexbox, Grid):** Diseño adaptativo para asegurar una visualización óptima en dispositivos de escritorio, tabletas y móviles.
- **HTML Semántico:** Estructura de página clara y accesible.
- **Nodemailer (configuración de backend):** Aunque la lógica de envío de correos está en el backend, el frontend interactúa con ella para las confirmaciones de cita.
- **PostgreSQL (configuración de backend):** La base de datos donde se almacenan las citas y la información de los mentores.

---

## 🚀 Cómo Empezar (Desarrollo Local)

Sigue estos pasos para poner en marcha el proyecto en tu máquina local.

### Prerrequisitos

- **Node.js** (versión 18.x o superior recomendada)
- **npm** o **Yarn** o **pnpm** o **Bun** (el gestor de paquetes de tu preferencia)
- Asegúrate de que el **backend** de la aplicación esté funcionando y sea accesible, ya que el frontend se comunica con él para las funcionalidades principales.

### Instalación y Ejecución

1.  **Clona el repositorio:**

    ```bash
    git clone https://github.com/dacaceros97/mi-sitio-servicios
    cd mi-sitio-servicios
    ```

2.  **Instala las dependencias:**

    ```bash
    npm install
    # o
    yarn install
    # o
    pnpm install
    # o
    bun install
    ```

3.  **Configura las variables de entorno:**
    Crea un archivo `.env.local` en la raíz del proyecto y añade las variables de entorno necesarias (ej. la URL de tu API de backend).

    ```env
    NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api/appointments
    ```

4.  **Inicia el servidor de desarrollo:**

    ```bash
    npm run dev
    # o
    yarn dev
    # o
    pnpm dev
    # o
    bun dev
    ```

5.  **Abre en tu navegador:**

    El proyecto estará disponible en [http://localhost:3000](http://localhost:3000).

---

## 📂 Estructura del Proyecto

- `app/`: Contiene las rutas principales de la aplicación (ej. `page.js`, `agendar/page.js`, `layout.js`).
- `app/globals.css`: Archivo CSS global para estilos generales, resets y variables CSS (incluyendo la lógica de tema claro/oscuro).
- `app/page.module.css`: Archivo CSS Modules para los estilos específicos de los componentes de la página de inicio.
- `components/`: (Si tuvieras) Componentes reutilizables.
- `public/`: Archivos estáticos como imágenes o fuentes.

---

## 💡 Características Clave

- **Agendamiento de Citas:** Permite a los usuarios agendar nuevas sesiones de mentoría de inglés.
- **Confirmación por Correo:** Envío automático de confirmaciones de cita (gestionado por el backend).
- **Diseño Adaptativo:** Experiencia de usuario optimizada para cualquier tamaño de pantalla.
- **Soporte de Tema Oscuro:** Se adapta automáticamente a la preferencia de tema (claro/oscuro) del sistema operativo del usuario.

---

## 🌐 Despliegue

La forma más sencilla de desplegar este proyecto Next.js es utilizando la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), de los creadores de Next.js.

Para más detalles sobre el despliegue, consulta la [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying).

---

## 📚 Aprender Más

Para aprender más sobre Next.js y su ecosistema, puedes consultar los siguientes recursos:

- [Next.js Documentation](https://nextjs.org/docs) - Aprende sobre las características y la API de Next.js.
- [Learn Next.js](https://nextjs.js.org/learn) - Un tutorial interactivo de Next.js.

¡Tu feedback y contribuciones son bienvenidos!
