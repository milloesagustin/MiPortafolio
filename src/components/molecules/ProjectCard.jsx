import { Card, Typography, Button, Space } from 'antd';
import { GithubOutlined, GlobalOutlined } from '@ant-design/icons';
import { TechTag } from '../atoms/TechTag';

const { Title, Paragraph } = Typography;

export const ProjectCard = ({ title, category, imageUrl, liveUrl, repoUrl, description }) => {
  return (
    <Card
      hoverable
      style={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '10px', overflow: 'hidden' }}
      cover={
        <img
          alt={`Previsualización de ${title}`}
          src={imageUrl}
          style={{ height: '200px', objectFit: 'cover' }}
        />
      }
      actions={[
        <Button
          key="repo"
          type="link"
          icon={<GithubOutlined />}
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Repositorio
        </Button>,
        liveUrl && (
          <Button
            key="live"
            type="link"
            icon={<GlobalOutlined />}
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Sitio Web
          </Button>
        ),
      ]}
    >
      <div style={{ flex: 1 }}>
        <Space wrap style={{ marginBottom: '10px' }}>
          {category.split('/').map((tech) => (
            <TechTag key={tech} text={tech} color="blue" />
          ))}
        </Space>
        <Title level={4} style={{ marginTop: 0 }}>
          {title}
        </Title>
        <Paragraph type="secondary" style={{ marginBottom: 0 }}>
          {description}
        </Paragraph>
      </div>
    </Card>
  );
};