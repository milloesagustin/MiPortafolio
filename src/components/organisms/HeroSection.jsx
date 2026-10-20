import { Row, Col, Typography, Space } from 'antd';
import { GithubOutlined, LinkedinOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { ProfileAvatar } from '../atoms/ProfileAvatar';
import { SocialButton } from '../atoms/SocialButton';

const { Title, Paragraph, Text } = Typography;

export const HeroSection = ({ personalInfo }) => {
  const { name, role, description, avatarUrl, location, socials } = personalInfo;

  return (
    <section id="sobre-mi" style={{ padding: '4rem 1rem', backgroundColor: '#ffffff', borderRadius: '12px', marginBottom: '2rem' }}>
      <Row gutter={[32, 32]} align="middle" justify="center">
        <Col xs={24} md={8} style={{ textAlign: 'center' }}>
          <ProfileAvatar src={avatarUrl} alt={name} size={180} />
        </Col>
        <Col xs={24} md={16}>
          <Space orientation="vertical" size="small">
            <Text strong style={{ color: '#1677ff', fontSize: '1rem', textTransform: 'uppercase' }}>
              ¿Quién soy?
            </Text>
            <Title level={1} style={{ margin: 0 }}>
              {name}
            </Title>
            <Title level={4} type="secondary" style={{ marginTop: '4px' }}>
              {role}
            </Title>
            <Text type="secondary">
              <EnvironmentOutlined style={{ marginRight: '6px' }} />
              {location}
            </Text>
            <Paragraph style={{ fontSize: '1.05rem', marginTop: '12px', lineHeight: '1.7' }}>
              {description}
            </Paragraph>
            <Space wrap style={{ marginTop: '12px' }}>
              <SocialButton
                href={socials.github}
                icon={<GithubOutlined />}
                label="GitHub"
                type="primary"
              />
              <SocialButton
                href={socials.linkedin}
                icon={<LinkedinOutlined />}
                label="LinkedIn"
              />
            </Space>
          </Space>
        </Col>
      </Row>
    </section>
  );
};