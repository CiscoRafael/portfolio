import { useLanguage } from '../services/translation'
import Skills from '../components/Skills.jsx'
import '../styles/about.css'
import minasMaquinasLogo from "../assets/minasMaquinas.png";
import prefeituraLogo from "../assets/prefeitura.png";
import profilePhoto from "../assets/foto.png"

const AboutMe = () => {
    const { t } = useLanguage()

    return (
        <>
            <section className="about-content">
                <h1 className="about-title">
                    <span className="about-tag">/</span>
                    {t('about')}
                </h1>

                <p className="about-subtitle">{t('about-subtitle')}</p>

                <div className="about-main">
                    <div className="about-bio">
                        <p>{t('about-paragraph-1')}</p>
                        <p>{t('about-paragraph-2')}</p>
                        <p>{t('about-paragraph-3')}</p>
                    </div>

                    <div className="about-photo-wrapper">
                        <img className="about-photo" src={profilePhoto} alt="Profile" />
                    </div>
                </div>
            </section>

            <Skills />

            <section className="experience-content">
                <h1 className="experience-title">
                    <span className="experience-tag">#</span>
                    {t('experience')}
                    <hr></hr>
                </h1>
                <div className="timeline">
                    <div className="container">
                        <img src={prefeituraLogo} alt="prefeituraLogo"/>
                        <h2 className="enterpriseTitle text-gradient"> {t('enterprise-name-1')}</h2>
                        <div className="text-box">
                            <h2> {t('position-name-1')}</h2>
                            <small> 2025-Atualmente</small>
                            <p>{t('job-description-1')}</p>
                        </div>
                    </div>
                    <div className="container">
                        <img src={minasMaquinasLogo} alt="minasMaquinasLogo"/>
                        <h2 className="enterpriseTitle text-gradient"> {t('enterprise-name-2')}</h2>
                        <div className="text-box">
                            <h2> {t('position-name-2')}</h2>
                            <small> 2024-2025</small>
                            <p>{t('job-description-2')}</p>
                        </div>
                    </div>
                </div>
            </section>
            </>
    )
}

export default AboutMe
