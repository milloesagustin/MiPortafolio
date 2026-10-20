import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ExperienceCard } from '../components/molecules/ExperienceCard';
import { EducationCard } from '../components/molecules/EducationCard';
import { ProjectCard } from '../components/molecules/ProjectCard';

describe('Pruebas Unitarias - Moléculas (Molecules)', () => {
  it('1. ExperienceCard: muestra empresa, cargo, fechas y descripción', () => {
    render(
      <ExperienceCard
        company="Eventos Labra"
        role="Desarrollador FullStack"
        startDate="Marzo 2026"
        endDate="Junio 2026"
        description="Desarrollo de Landing Page corporativa."
      />
    );
    expect(screen.getByText('Eventos Labra')).toBeInTheDocument();
    expect(screen.getByText('Desarrollador FullStack')).toBeInTheDocument();
    expect(screen.getByText('Marzo 2026 - Junio 2026')).toBeInTheDocument();
    expect(screen.getByText('Desarrollo de Landing Page corporativa.')).toBeInTheDocument();
  });

  it('2. EducationCard: muestra institución, carrera y año de obtención', () => {
    render(
      <EducationCard
        institution="Instituto Profesional DuocUC"
        degree="Analista Programador"
        year="2026"
      />
    );
    expect(screen.getByText('Instituto Profesional DuocUC')).toBeInTheDocument();
    expect(screen.getByText('Analista Programador')).toBeInTheDocument();
    expect(screen.getByText('Año 2026')).toBeInTheDocument();
  });

  it('3. ProjectCard: muestra título, tags separados, imagen y enlaces a repo y web', () => {
    render(
      <ProjectCard
        title="Landing Page MMD"
        category="React/Vite/JavaScript"
        imageUrl="/images/mmd.png"
        liveUrl="https://mmd.cl"
        repoUrl="https://github.com/milloesagustin/MMD-LandingPage"
        description="Proyecto con integración de API de Meta."
      />
    );
    expect(screen.getByText('Landing Page MMD')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Vite')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();

    const repoLink = screen.getByRole('link', { name: /repositorio/i });
    const liveLink = screen.getByRole('link', { name: /sitio web/i });
    expect(repoLink).toHaveAttribute('href', 'https://github.com/milloesagustin/MMD-LandingPage');
    expect(liveLink).toHaveAttribute('href', 'https://mmd.cl');
  });
});