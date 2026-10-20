import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PortfolioPage } from '../pages/PortfolioPage';
import { App } from '../App';
import { personalInfo } from '../data/portfolioData';

describe('Pruebas de Integración - Pages & App', () => {
  it('1. PortfolioPage: actualiza el título de la pestaña con useEffect y monta todas las secciones', () => {
    render(<PortfolioPage />);

    expect(document.title).toBe(`${personalInfo.name} | Portafolio Profesional`);
    expect(screen.getByText('Experiencia Laboral')).toBeInTheDocument();
    expect(screen.getByText('Estudios y Certificaciones')).toBeInTheDocument();
    expect(screen.getByText('Desarrollos y Proyectos')).toBeInTheDocument();
  });

  it('2. App: renderiza la aplicación completa con el proveedor de temas de Ant Design', () => {
    render(<App />);
    expect(screen.getByText(personalInfo.name)).toBeInTheDocument();
  });
});