import '../styles/CvPreview.css';
import mailSvgSrc from '../assets/mail.svg';
import callSvgScr from '../assets/call.svg';
import webSvgScr from '../assets/web.svg';
import linkedinSvgScr from '../assets/linkedin.svg';

export default function CvPreview({
    userData,
    additionalData,
    groupsEdu,
    groupsExp,
    groupsSkill,
}) {
    return (
        <div className="cv-preview">
            <header>
                <div className="name-occupation">
                    <p className="username">{userData.name.toUpperCase()}</p>
                    <p className="occupation">
                        {userData.occupation.toUpperCase()}
                    </p>
                </div>
                <div className="cv-section">
                    <h1 className="cv-section-name">CONTACT</h1>
                    <div className="content contact">
                        <div className="content-control">
                            <img src={mailSvgSrc} />
                            <p>{userData.email}</p>
                        </div>
                        <div className="content-control">
                            <img src={callSvgScr} />
                            <p>{userData.phone}</p>
                        </div>
                        {additionalData.portfolio && (
                            <div className="content-control">
                                <img src={webSvgScr} />
                                <a href={additionalData.portfolio}>Portfolio</a>
                            </div>
                        )}
                        {additionalData.linkedin && (
                            <div className="content-control">
                                <img src={linkedinSvgScr} />
                                <a href={additionalData.portfolio}>Linkedin</a>
                            </div>
                        )}
                    </div>
                </div>
            </header>
            <main>
                <div className="cv-section">
                    <h1 className="cv-section-name">SUMARY</h1>
                    <div className="content">
                        <p style={{ textAlign: 'justify' }}>
                            {additionalData.about}
                        </p>
                    </div>
                </div>
                <div className="cv-section">
                    <h1 className="cv-section-name">EDUCATION</h1>
                    <div className="content">
                        <ul>
                            {groupsEdu.map((item) => (
                                <li key={item.id}>
                                    <p>{item.endDate}</p>
                                    <p>
                                        {item.degree} - {item.institution}
                                    </p>
                                    <p>{item.honors}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="cv-section">
                    <h1 className="cv-section-name">EXPERIENCE</h1>
                    <div className="content">
                        <ul>
                            {groupsExp.map((item) => (
                                <li key={item.id}>
                                    <p>
                                        {item.startDate} to {item.endDate}
                                    </p>
                                    <p>{item.company}</p>
                                    <p>{item.title}</p>
                                    <p>{item.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="cv-section">
                    <h1 className="cv-section-name">SKILLS</h1>
                    <div className="content">
                        {groupsSkill.map((item) => (
                            <p>{item.skill}</p>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
