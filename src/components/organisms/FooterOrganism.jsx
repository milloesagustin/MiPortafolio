import { Layout, Typography, Space } from 'antd';

const { Footer } = Layout;
const { Text } = Typography;

export const FooterOrganism = ({ name, email, location }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Footer
      style={{
        textAlign: 'center',
        backgroundColor: '#001529',
        color: '#ffffff',
        padding: '2rem 1rem',
      }}
    >
      <Space orientation="vertical" size="small">
        <Text style={{ color: '#ffffff', fontWeight: 500 }}>
          © {currentYear} {name} — Todos los derechos reservados.
        </Text>
        <Text style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
          Contacto: {email} | {location}
        </Text>
      </Space>
    </Footer>
  );
};