import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { GithubOutlined } from '@ant-design/icons';
import { SectionTitle } from '../components/atoms/SectionTitle';
import { ProfileAvatar } from '../components/atoms/ProfileAvatar';
import { TechTag } from '../components/atoms/TechTag';
import { SocialButton } from '../components/atoms/SocialButton';

describe('Pruebas Unitarias - Átomos (Atoms)', () => {
  it('1. SectionTitle: renderiza el título y el subtítulo correctamente', () => {
    render(<SectionTitle title="Título de Prueba" subtitle="Subtítulo de Prueba" />);
    expect(screen.getByText('Título de Prueba')).toBeInTheDocument();
    expect(screen.getByText('Subtítulo de Prueba')).toBeInTheDocument();
  });

  it('2. ProfileAvatar: renderiza la imagen del avatar con su atributo alt', () => {
    render(<ProfileAvatar src="https://github.com/milloesagustin.png" alt="Avatar Agustín" />);
    const imgElement = screen.getByAltText('Avatar Agustín');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', 'https://github.com/milloesagustin.png');
  });

  it('3. TechTag: renderiza el texto de la etiqueta tecnológica', () => {
    render(<TechTag text="React/Vite" color="blue" />);
    expect(screen.getByText('React/Vite')).toBeInTheDocument();
  });

  it('4. SocialButton: renderiza el botón con el texto y enlace externo seguro', () => {
    render(
      <SocialButton
        href="https://github.com/milloesagustin"
        icon={<GithubOutlined />}
        label="Mi GitHub"
      />
    );
    const linkButton = screen.getByRole('link', { name: /mi github/i });
    expect(linkButton).toBeInTheDocument();
    expect(linkButton).toHaveAttribute('href', 'https://github.com/milloesagustin');
    expect(linkButton).toHaveAttribute('target', '_blank');
  });
});