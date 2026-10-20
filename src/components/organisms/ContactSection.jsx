import { useState, useEffect } from 'react';
import { Row, Col, Card, Input, Button, Alert, Space, Typography } from 'antd';
import { GithubOutlined, LinkedinOutlined, SendOutlined, MailOutlined } from '@ant-design/icons';
import { SectionTitle } from '../atoms/SectionTitle';
import { SocialButton } from '../atoms/SocialButton';

const { TextArea } = Input;
const { Text } = Typography;

export const ContactSection = ({ socials, email }) => {
  const [formData, setFormData] = useState({
    name: '',
    userEmail: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Limpia el mensaje de éxito después de 5 segundos usando el ciclo de vida
  useEffect(() => {
    if (!isSubmitted) return;
    const timer = setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isSubmitted]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.userEmail.trim()) {
      newErrors.userEmail = 'El correo electrónico es obligatorio.';
    } else if (!emailRegex.test(formData.userEmail)) {
      newErrors.userEmail = 'Ingresa un correo electrónico válido.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
    } else {
      setErrors({});
      setIsSubmitted(true);
      setFormData({ name: '', userEmail: '', message: '' });
    }
  };

  return (
    <section id="contacto" style={{ padding: '3rem 0' }}>
      <SectionTitle
        title="Contacto"
        subtitle="¿Tienes un proyecto en mente? Conectemos a través de mis redes o escríbeme directamente"
      />
      <Row gutter={[32, 32]} justify="center">
        <Col xs={24} md={14}>
          <Card style={{ borderRadius: '12px' }}>
            {isSubmitted && (
              <Alert
                message="¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto."
                type="success"
                showIcon
                style={{ marginBottom: '1rem' }}
              />
            )}
            <form onSubmit={handleSubmit} noValidate>
              <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
                <div>
                  <label htmlFor="name" style={{ fontWeight: 500, display: 'block', marginBottom: '4px' }}>
                    Nombre Completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    status={errors.name ? 'error' : ''}
                  />
                  {errors.name && (
                    <Text type="danger" role="alert" style={{ fontSize: '0.85rem' }}>
                      {errors.name}
                    </Text>
                  )}
                </div>

                <div>
                  <label htmlFor="userEmail" style={{ fontWeight: 500, display: 'block', marginBottom: '4px' }}>
                    Correo Electrónico
                  </label>
                  <Input
                    id="userEmail"
                    name="userEmail"
                    type="email"
                    placeholder="tu@correo.com"
                    value={formData.userEmail}
                    onChange={handleChange}
                    status={errors.userEmail ? 'error' : ''}
                  />
                  {errors.userEmail && (
                    <Text type="danger" role="alert" style={{ fontSize: '0.85rem' }}>
                      {errors.userEmail}
                    </Text>
                  )}
                </div>

                <div>
                  <label htmlFor="message" style={{ fontWeight: 500, display: 'block', marginBottom: '4px' }}>
                    Mensaje
                  </label>
                  <TextArea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Cuéntame sobre tu proyecto..."
                    value={formData.message}
                    onChange={handleChange}
                    status={errors.message ? 'error' : ''}
                  />
                  {errors.message && (
                    <Text type="danger" role="alert" style={{ fontSize: '0.85rem' }}>
                      {errors.message}
                    </Text>
                  )}
                </div>

                <Button type="primary" htmlType="submit" icon={<SendOutlined />} size="large" block>
                  Enviar Mensaje
                </Button>
              </Space>
            </form>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card style={{ borderRadius: '12px', height: '100%' }}>
            <Space orientation="vertical" size="large" style={{ width: '100%' }}>
              <div>
                <Text strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '8px' }}>
                  Correo Directo
                </Text>
                <Text type="secondary">
                  <MailOutlined style={{ marginRight: '8px', color: '#1677ff' }} />
                  {email}
                </Text>
              </div>
              <div>
                <Text strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '12px' }}>
                  Redes Profesionales
                </Text>
                <Space orientation="vertical" style={{ width: '100%' }}>
                  <SocialButton
                    href={socials.github}
                    icon={<GithubOutlined />}
                    label="GitHub (@milloesagustin)"
                  />
                  <SocialButton
                    href={socials.linkedin}
                    icon={<LinkedinOutlined />}
                    label="Perfil de LinkedIn"
                  />
                </Space>
              </div>
            </Space>
          </Card>
        </Col>
      </Row>
    </section>
  );
};