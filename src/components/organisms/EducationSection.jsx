import { Row, Col } from 'antd';
import { SectionTitle } from '../atoms/SectionTitle';
import { EducationCard } from '../molecules/EducationCard';

export const EducationSection = ({ educationList }) => {
  return (
    <section id="estudios" style={{ padding: '3rem 0' }}>
      <SectionTitle
        title="Estudios y Certificaciones"
        subtitle="Formación académica y especialización técnica"
      />
      <Row gutter={[24, 24]} justify="center">
        {educationList.map((edu) => (
          <Col xs={24} sm={12} md={10} key={edu.id}>
            <EducationCard
              institution={edu.institution}
              degree={edu.degree}
              year={edu.year}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
};