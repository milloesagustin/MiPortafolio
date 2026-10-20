import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MainLayout } from '../components/layouts/MainLayout';
import { personalInfo } from '../data/portfolioData';

describe('Pruebas Unitarias - Layouts (Templates)', () => {
  it('MainLayout: envuelve y renderiza el Navbar, el contenido hijo (children) y el Footer', () => {
    render(
      <MainLayout personalInfo={personalInfo}>
        <div data-testid="contenido-hijo">Contenido de Prueba dentro del Layout</div>
      </MainLayout>
    );

    // Verifica Navbar
    expect(screen.getByText(/NovaBuild \| Agustín Peña/i)).toBeInTheDocument();
    // Verifica Contenido Hijo
    expect(screen.getByTestId('contenido-hijo')).toBeInTheDocument();
    // Verifica Footer
    expect(screen.getByText(/Todos los derechos reservados/i)).toBeInTheDocument();
  });
});