import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export const ProfileAvatar = ({ src, alt, size = 160 }) => {
  return (
    <Avatar
      src={src}
      alt={alt}
      size={size}
      icon={<UserOutlined />}
      style={{
        border: '4px solid #1677ff',
        boxShadow: '0 8px 24px rgba(22, 119, 255, 0.2)',
        backgroundColor: '#f0f5ff',
      }}
    />
  );
};