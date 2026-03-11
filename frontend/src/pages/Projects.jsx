import { useLanguage } from "../services/translation";
import '../styles/projects.css'
import project1Image from '../assets/project1.gif';
import project2Image from '../assets/project2.png';
import project3Image from '../assets/project3.gif';

const Projects = () => {
    const { t } = useLanguage()

    const projectsData = [
        {
            image: project1Image,
            techs: ['React', 'Spring Boot'],
            titleKey: 'projects.project-1-title',
            descKey: 'projects.project-1-description',
            github: 'https://github.com',
            demo: 'https://github.com'
        },
        {
            image: project2Image,
            techs: ['React', '.NET'],
            titleKey: 'projects.project-2-title',
            descKey: 'projects.project-2-description',
            github: 'https://github.com',
            demo: 'https://github.com'
        },
        {
            image: project3Image,
            techs: ['React', 'NestJS'],
            titleKey: 'projects.project-3-title',
            descKey: 'projects.project-3-description',
            github: 'https://github.com',
            demo: 'https://github.com'
        }
    ];

    const smallProjectsData = [
        {
            techs: ['Java'],
            titleKey: 'smallprojects.project-1-title',
            descKey: 'smallprojects.project-1-description',
            github: 'https://github.com',
            demo: 'https://github.com'
        },
        {
            techs: ['C++'],
            titleKey: 'smallprojects.project-2-title',
            descKey: 'smallprojects.project-2-description',
            github: 'https://github.com',
            demo: 'https://github.com'
        },
        {
            techs: ['Java'],
            titleKey: 'smallprojects.project-3-title',
            descKey: 'smallprojects.project-3-description',
            github: 'https://github.com',
            demo: 'https://github.com'
        },
        {
            techs: ['HTML', 'CSS', 'JavaScript'],
            titleKey: 'smallprojects.project-4-title',
            descKey: 'smallprojects.project-4-description',
            github: 'https://github.com',
            demo: 'https://github.com'
        }
    ];

    return (
        <section className="projects-content">
            <h1 className="projects-title">
                <span className="projects-tag">/</span>
                {t('projects.title')}
            </h1>

            <p className="projects-subtitle">{t('projects.subtitle')}</p>

            <h2 className="sub-projects-title">
                <span className="projects-tag">#</span>
                {t('projects.complete-projects')}
            </h2>

            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div className="best-project-card" key={index}>
                        <img src={project.image} alt={t(project.titleKey)} className="best-project-image" />
                        <div className="project-techs">
                            {project.techs.map((tech, i) => (
                                <span className="project-tech" key={i}>{tech}</span>
                            ))}
                        </div>
                        <h3 className="project-title">{t(project.titleKey)}</h3>
                        <p className="project-description">{t(project.descKey)}</p>
                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">&gt; GitHub</a>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">&gt; Demo</a>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="sub-projects-title">
                <span className="projects-tag">#</span>
                {t('projects.small-projects')}
            </h2>

            <div className="projects-grid">
                {smallProjectsData.map((project, index) => (
                    <div className="best-project-card" key={index}>
                        <div className="project-techs">
                            {project.techs.map((tech, i) => (
                                <span className="project-tech" key={i}>{tech}</span>
                            ))}
                        </div>
                        <h3 className="project-title">{t(project.titleKey)}</h3>
                        <p className="project-description">{t(project.descKey)}</p>
                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">&gt; GitHub</a>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">&gt; Demo</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
