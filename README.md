# 🚀 Portafolio Personal — Agustín Ignacio Peña Palma

Aplicación web interactiva de tipo *Single Page Application* (SPA) desarrollada con **React**, **Vite** y **Ant Design** bajo la metodología de arquitectura **Atomic Design**.

---

## 📋 Características y Secciones

El proyecto estructura la información profesional en 6 secciones principales:
1. **Sección Personal (`HeroSection`):** Presentación profesional ("¿Quién soy?"), avatar estilizado y enlaces a redes profesionales.
2. **Experiencia Laboral (`ExperienceSection`):** Historial cronológico de proyectos y empresas (*Eventos Labra*, *MMD Technical Support*, *IMK Servicios Industriales*).
3. **Estudios y Certificaciones (`EducationSection`):** Formación académica en *Instituto Profesional DuocUC* y certificaciones técnicas.
4. **Desarrollos y Proyectos (`ProjectsSection`):** Galería interactiva con previsualización, filtro dinámico por tecnologías mediante React Hooks (`useState`, `useEffect`) y enlaces directos a repositorios de GitHub y sitios en producción.
5. **Contacto (`ContactSection`):** Formulario controlado con validación en el lado del cliente (campos obligatorios, formato de email y longitud mínima) y accesos directos a LinkedIn y GitHub.
6. **Pie de Página (`FooterOrganism`):** Cálculo dinámico del año actual mediante JavaScript, derechos de autor y datos de contacto.

---

## 🛠️ Stack Tecnológico

* **Entorno y Librería Principal:** React + Vite
* **Librería de Componentes (UI):** Ant Design (`antd`) & `@ant-design/icons`
* **Gestión de Estado y Ciclo de Vida:** React Hooks (`useState`, `useEffect`)
* **Arquitectura de Software:** Atomic Design System
* **Testing Automatizado:** Vitest + React Testing Library + `jsdom`
* **Estándares de Código:** Clean Code (ES6+, uso estricto de `const`/`let`, *arrow functions*, *destructuring*)

---

## 📂 Estructura del Proyecto (Atomic Design)

El código fuente está organizado jerárquicamente evitando componentes monolíticos:

```text
src/
├── components/
│   ├── atoms/          # Elementos base indivisibles (ProfileAvatar, SectionTitle, SocialButton, TechTag)
│   ├── molecules/      # Agrupación de átomos (EducationCard, ExperienceCard, ProjectCard)
│   ├── organisms/      # Secciones independientes (Navbar, Hero, Experience, Education, Projects, Contact, Footer)
│   └── layouts/        # Plantilla estructural de la aplicación (MainLayout)
├── pages/
│   └── PortfolioPage.jsx # Vista principal e inyección de datos
├── data/
│   └── portfolioData.js  # Datos del portafolio desacoplados de la vista
├── __tests__/          # Suite completa de pruebas unitarias y de integración (17 tests)
│   ├── atoms.test.jsx
│   ├── molecules.test.jsx
│   ├── organisms.test.jsx
│   ├── layouts.test.jsx
│   └── pages.test.jsx
├── App.jsx
├── main.jsx
└── setupTests.js       # Configuración de Vitest y mocks de entorno (matchMedia, ResizeObserver)
```

---

## ⚙️ Instrucciones de Instalación y Ejecución Local

Sigue estos pasos para clonar y levantar el proyecto en tu entorno de desarrollo local:

### 1. Clonar el repositorio
```bash
git clone [https://github.com/milloesagustin/mi-portafolio.git](https://github.com/milloesagustin/mi-portafolio.git)
cd mi-portafolio
```

### 2. Instalar las dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
Abre tu navegador en `http://localhost:5173` para visualizar la aplicación.

### 4. Compilar para producción (Opcional)
```bash
npm run build
```

---

## 🧪 Ejecución de Pruebas Automatizadas (Testing)

El proyecto cuenta con **5 archivos de prueba y 17 tests automatizados** que validan el 100% de los componentes de la arquitectura (`atoms`, `molecules`, `organisms`, `layouts`, `pages` y `App`), el filtrado con Hooks y las validaciones del formulario de contacto.

Para ejecutar la suite de pruebas en consola:

```bash
npm run test
```

---

## 📬 Autor y Contacto

* **Nombre:** Agustín Ignacio Peña Palma
* **Rol:** Desarrollador FullStack — Analista Programador
* **Email:** agu.pena@duocuc.cl
* **GitHub:** [@milloesagustin](https://github.com/milloesagustin)
* **LinkedIn:** [Agustín Peña](https://www.linkedin.com/in/agustin-peña-99762941b)
