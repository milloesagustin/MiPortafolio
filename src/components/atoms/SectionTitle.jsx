import { Typography } from 'antd';

const { Title, Text } = Typography;

export const SectionTitle = ({ title, subtitle }) => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
      <Title level={2} style={{ marginBottom: '0.5rem' }}>
        {title}
      </Title>
      {subtitle && (
        <Text type="secondary" style={{ fontSize: '1rem' }}>
          {subtitle}
        </Text>
      )}
    </div>
  );
};