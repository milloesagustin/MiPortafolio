import { useEffect } from 'react';
import { MainLayout } from '../components/layouts/MainLayout';
import { HeroSection } from '../components/organisms/HeroSection';
import { ExperienceSection } from '../components/organisms/ExperienceSection';
import { EducationSection } from '../components/organisms/EducationSection';
import { ProjectsSection } from '../components/organisms/ProjectsSection';
import { ContactSection } from '../components/organisms/ContactSection';
import {
  personalInfo,
  experienceData,
  educationData,
  projectsData,
} from '../data/portfolioData';

export const PortfolioPage = () => {
  useEffect(() => {
    document.title = `${personalInfo.name} | Portafolio Profesional`;
  }, []);

  return (
    <MainLayout personalInfo={personalInfo}>
      <HeroSection personalInfo={personalInfo} />
      <ExperienceSection experiences={experienceData} />
      <EducationSection educationList={educationData} />
      <ProjectsSection projects={projectsData} />
      <ContactSection socials={personalInfo.socials} email={personalInfo.email} />
    </MainLayout>
  );
};