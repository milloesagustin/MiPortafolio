import { Card, Typography, Space } from 'antd';
import { ReadOutlined } from '@ant-design/icons';
import { TechTag } from '../atoms/TechTag';

const { Title, Text } = Typography;

export const EducationCard = ({ institution, degree, year }) => {
  return (
    <Card hoverable style={{ height: '100%', borderRadius: '10px' }}>
      <Space orientation="vertical" size="small" style={{ width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <ReadOutlined style={{ fontSize: '24px', color: '#1677ff' }} />
          <TechTag text={`Año ${year}`} color="cyan" />
        </div>
        <Title level={4} style={{ marginTop: '8px', marginBottom: '4px' }}>
          {degree}
        </Title>
        <Text type="secondary" style={{ fontSize: '1rem' }}>
          {institution}
        </Text>
      </Space>
    </Card>
  );
};