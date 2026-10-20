import { Button } from 'antd';

export const SocialButton = ({ href, icon, label, type = 'default' }) => {
  return (
    <Button
      type={type}
      icon={icon}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      size="large"
    >
      {label}
    </Button>
  );
};