import { Tag } from 'antd';

export const TechTag = ({ text, color = 'blue' }) => {
  return (
    <Tag color={color} style={{ borderRadius: '6px', padding: '2px 10px', marginBottom: '4px' }}>
      {text}
    </Tag>
  );
};