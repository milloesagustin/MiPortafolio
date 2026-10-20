import { Card, Typography, Space } from 'antd';
import { CalendarOutlined, BankOutlined } from '@ant-design/icons';
import { TechTag } from '../atoms/TechTag';

const { Title, Paragraph, Text } = Typography;

export const ExperienceCard = ({ company, role, startDate, endDate, description }) => {
  return (
    <Card hoverable style={{ marginBottom: '1rem', borderRadius: '10px' }}>
      <Space orientation="vertical" size="small" style={{ width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <Title level={4} style={{ margin: 0 }}>
            {role}
          </Title>
          <TechTag text={`${startDate} - ${endDate}`} color="geekblue" />
        </div>
        <Text strong style={{ color: '#1677ff', fontSize: '1rem' }}>
          <BankOutlined style={{ marginRight: '6px' }} />
          {company}
        </Text>
        <Paragraph style={{ marginBottom: 0, marginTop: '8px' }}>
          {description}
        </Paragraph>
      </Space>
    </Card>
  );
};