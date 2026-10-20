import { Layout } from 'antd';
import { NavbarOrganism } from '../organisms/NavbarOrganism';
import { FooterOrganism } from '../organisms/FooterOrganism';

const { Content } = Layout;

export const MainLayout = ({ children, personalInfo }) => {
  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#f5f7fa' }}>
      <NavbarOrganism />
      <Content style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '2rem 1rem' }}>
        {children}
      </Content>
      <FooterOrganism
        name={personalInfo.name}
        email={personalInfo.email}
        location={personalInfo.location}
      />
    </Layout>
  );
};