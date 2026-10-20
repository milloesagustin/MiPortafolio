import { Layout, Menu, Typography } from 'antd';

const { Header } = Layout;
const { Text } = Typography;

export const NavbarOrganism = () => {
  const menuItems = [
    { key: 'sobre-mi', label: <a href="#sobre-mi">Sobre Mí</a> },
    { key: 'experiencia', label: <a href="#experiencia">Experiencia</a> },
    { key: 'estudios', label: <a href="#estudios">Estudios</a> },
    { key: 'proyectos', label: <a href="#proyectos">Proyectos</a> },
    { key: 'contacto', label: <a href="#contacto">Contacto</a> },
  ];

  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
        padding: '0 2rem',
      }}
    >
      <Text strong style={{ fontSize: '1.2rem', color: '#1677ff', whiteSpace: 'nowrap' }}>
        NovaBuild | Agustín Peña
      </Text>
      <Menu
        mode="horizontal"
        items={menuItems}
        style={{ borderBottom: 'none', flex: 1, justifyContent: 'flex-end', minWidth: 0 }}
      />
    </Header>
  );
};