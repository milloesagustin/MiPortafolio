import { useState, useEffect } from 'react';
import { Row, Col, Radio, Empty } from 'antd';
import { SectionTitle } from '../atoms/SectionTitle';
import { ProjectCard } from '../molecules/ProjectCard';

export const ProjectsSection = ({ projects }) => {
  const [selectedTech, setSelectedTech] = useState('Todos');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (selectedTech === 'Todos') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.category.toLowerCase().includes(selectedTech.toLowerCase())
      );
      setFilteredProjects(filtered);
    }
  }, [selectedTech, projects]);

  const handleFilterChange = (e) => {
    setSelectedTech(e.target.value);
  };

  return (
    <section id="proyectos" style={{ padding: '3rem 0' }}>
      <SectionTitle
        title="Desarrollos y Proyectos"
        subtitle="Plataformas web y soluciones en producción"
      />

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Radio.Group value={selectedTech} onChange={handleFilterChange} buttonStyle="solid">
          <Radio.Button value="Todos">Todos</Radio.Button>
          <Radio.Button value="React">React / Vite</Radio.Button>
          <Radio.Button value="JavaScript">JavaScript / HTML / CSS</Radio.Button>
        </Radio.Group>
      </div>

      {filteredProjects.length === 0 ? (
        <Empty description="No se encontraron proyectos con ese filtro" />
      ) : (
        <Row gutter={[24, 24]}>
          {filteredProjects.map((project) => (
            <Col xs={24} sm={12} lg={8} key={project.id}>
              <ProjectCard
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
                liveUrl={project.liveUrl}
                repoUrl={project.repoUrl}
                description={project.description}
              />
            </Col>
          ))}
        </Row>
      )}
    </section>
  );
};