import { Row, Col } from 'antd';
import { SectionTitle } from '../atoms/SectionTitle';
import { ExperienceCard } from '../molecules/ExperienceCard';

export const ExperienceSection = ({ experiences }) => {
  return (
    <section id="experiencia" style={{ padding: '3rem 0' }}>
      <SectionTitle
        title="Experiencia Laboral"
        subtitle="Trayectoria profesional y soluciones digitales desarrolladas"
      />
      <Row justify="center">
        <Col xs={24} md={20} lg={18}>
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              company={exp.company}
              role={exp.role}
              startDate={exp.startDate}
              endDate={exp.endDate}
              description={exp.description}
            />
          ))}
        </Col>
      </Row>
    </section>
  );
};