import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { NavbarOrganism } from '../components/organisms/NavbarOrganism';
import { HeroSection } from '../components/organisms/HeroSection';
import { ExperienceSection } from '../components/organisms/ExperienceSection';
import { EducationSection } from '../components/organisms/EducationSection';
import { ProjectsSection } from '../components/organisms/ProjectsSection';
import { ContactSection } from '../components/organisms/ContactSection';
import { FooterOrganism } from '../components/organisms/FooterOrganism';
import {
  personalInfo,
  experienceData,
  educationData,
  projectsData,
} from '../data/portfolioData';

describe('Pruebas Unitarias y de Estado - Organismos (Organisms)', () => {
  it('1. NavbarOrganism: renderiza la marca y todos los enlaces de navegación', () => {
    render(<NavbarOrganism />);
    expect(screen.getByText(/NovaBuild \| Agustín Peña/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sobre mí/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /experiencia/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /estudios/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /proyectos/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contacto/i })).toBeInTheDocument();
  });

  it('2. HeroSection: renderiza la información personal del desarrollador', () => {
    render(<HeroSection personalInfo={personalInfo} />);
    expect(screen.getByText('¿Quién soy?')).toBeInTheDocument();
    expect(screen.getByText(personalInfo.name)).toBeInTheDocument();
    expect(screen.getByText(personalInfo.role)).toBeInTheDocument();
    expect(screen.getByText(personalInfo.location)).toBeInTheDocument();
  });

  it('3. ExperienceSection: renderiza el listado completo de experiencias laborales', () => {
    render(<ExperienceSection experiences={experienceData} />);
    expect(screen.getByText('Experiencia Laboral')).toBeInTheDocument();
    expect(screen.getByText('Eventos Labra')).toBeInTheDocument();
    expect(screen.getByText('MMD Technical Support')).toBeInTheDocument();
    expect(screen.getByText('IMK Servicios Industriales')).toBeInTheDocument();
  });

  it('4. EducationSection: renderiza el listado completo de estudios', () => {
    render(<EducationSection educationList={educationData} />);
    expect(screen.getByText('Estudios y Certificaciones')).toBeInTheDocument();
    expect(screen.getByText('Instituto Profesional DuocUC')).toBeInTheDocument();
    expect(screen.getByText('Certificación Especializada')).toBeInTheDocument();
  });

  it('5. ProjectsSection: renderiza y filtra proyectos dinámicamente con Hooks', () => {
    render(<ProjectsSection projects={projectsData} />);
    expect(screen.getByText('Landing Page Eventos Labra')).toBeInTheDocument();

    const jsRadio = screen.getByLabelText('JavaScript / HTML / CSS');
    fireEvent.click(jsRadio);

    expect(screen.queryByText('Landing Page Eventos Labra')).not.toBeInTheDocument();
    expect(screen.getByText('Landing Page MMD')).toBeInTheDocument();
    expect(screen.getByText('Landing Page IMK SPA')).toBeInTheDocument();
  });

  it('6. ContactSection: valida errores del formulario y permite envío exitoso', () => {
    render(<ContactSection socials={personalInfo.socials} email={personalInfo.email} />);

    const submitBtn = screen.getByRole('button', { name: /enviar mensaje/i });
    fireEvent.click(submitBtn);

    // Verifica validaciones de campos vacíos
    expect(screen.getByText('El nombre es obligatorio.')).toBeInTheDocument();
    expect(screen.getByText('El correo electrónico es obligatorio.')).toBeInTheDocument();
    expect(screen.getByText('El mensaje debe tener al menos 10 caracteres.')).toBeInTheDocument();

    // Completa el formulario correctamente
    fireEvent.change(screen.getByLabelText(/nombre completo/i), {
      target: { value: 'Agustín Peña' },
    });
    fireEvent.change(screen.getByLabelText(/correo electrónico/i), {
      target: { value: 'agu.pena@duocuc.cl' },
    });
    fireEvent.change(screen.getByLabelText(/mensaje/i), {
      target: { value: 'Mensaje de prueba con más de diez caracteres.' },
    });

    fireEvent.click(submitBtn);

    expect(
      screen.getByText(/¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto\./i)
    ).toBeInTheDocument();
  });

  it('7. FooterOrganism: muestra el año actual calculado dinámicamente y derechos de autor', () => {
    render(
      <FooterOrganism
        name={personalInfo.name}
        email={personalInfo.email}
        location={personalInfo.location}
      />
    );
    const currentYear = new Date().getFullYear().toString();
    expect(
      screen.getByText(new RegExp(`© ${currentYear} ${personalInfo.name}`, 'i'))
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`${personalInfo.email}`, 'i'))
    ).toBeInTheDocument();
  });
});