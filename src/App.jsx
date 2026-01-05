import UserForm from './components/FormSections/UserForm';
import AdditionalForm from './components/FormSections/AdditionalForm';
import EducationForm from './components/FormSections/EducationForm';
import ExperienceForm from './components/FormSections/ExperienceForm';
import SkillForm from './components/FormSections/SkillsForm';

import CvPreview from './components/CvPreview';

import useMultiStepForm from './hooks/useMultiStepForm';
import usePersonalForm from './hooks/usePersonalForm';
import useGroupForm from './hooks/useGroupForm';

import './styles/app.css';
import './styles/buttons.css';

function App() {
    const { userData, updateUserFields } = usePersonalForm({
        name: 'John Doe',
        occupation: 'Developer',
        email: 'john@gmail.com',
        phone: '7777777777',
        address: 'Florida, USA',
    });

    const {
        userData: additionalData,
        updateUserFields: updateAdditionalFields,
    } = usePersonalForm({
        about: '                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eos sint consequatur aliquid itaque nobis animi velit quos voluptas amet cum, ratione ullam molestiae, modi culpa earum facere ut expedita!',
        portfolio: 'johndoe.com',
        linkedin: '@johndoe',
    });

    const {
        addNew: addNewEdu,
        remove: removeEdu,
        updateField: updateFieldEdu,
        groups: groupsEdu,
    } = useGroupForm([
        {
            id: 1,
            institution: 'Odin Project',
            degree: 'Software engineer',
            endDate: '2025-12',
            honors: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, eius?',
            open: false,
        },
    ]);

    const {
        addNew: addNewExp,
        remove: removeExp,
        updateField: updateFieldExp,
        groups: groupsExp,
    } = useGroupForm([
        {
            id: 1,
            company: 'W3Schools',
            title: 'Full stack developer',
            startDate: 'jan 2025',
            endDate: '2025-01',
            description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, eius?',
            open: false,
        },
    ]);

    const {
        addNew: addNewSkill,
        remove: removeSkill,
        updateField: updateFieldSkill,
        groups: groupsSkill,
    } = useGroupForm([
        {
            id: 1,
            skill: 'React.js',
            open: false,
        },
    ]);

    const { currentIndex, steps, step, back, next, isFistStep, isLastStep } =
        useMultiStepForm([
            <UserForm {...userData} updateData={updateUserFields} />,
            <AdditionalForm
                {...additionalData}
                updateData={updateAdditionalFields}
            />,
            <EducationForm
                addNew={addNewEdu}
                remove={removeEdu}
                updateField={updateFieldEdu}
                groups={groupsEdu}
            />,
            <ExperienceForm
                addNew={addNewExp}
                remove={removeExp}
                updateField={updateFieldExp}
                groups={groupsExp}
            />,
            <SkillForm
                addNew={addNewSkill}
                remove={removeSkill}
                updateField={updateFieldSkill}
                groups={groupsSkill}
            />,
        ]);

    function onSubmit(e) {
        e.preventDefault();
        next();
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <p style={{ alignSelf: 'flex-end', marginBottom: '.5rem' }}>
                    {currentIndex + 1} / {steps.length}
                </p>
                {step}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '.5rem',
                    }}
                >
                    {isFistStep ? (
                        <div />
                    ) : (
                        <button
                            className="back-btn"
                            type="button"
                            onClick={back}
                        >
                            &#8592;
                        </button>
                    )}
                    {isLastStep ? (
                        <div />
                    ) : (
                        <button className="next-btn" type="submit">
                            &#8594;
                        </button>
                    )}
                </div>
            </form>
            <CvPreview
                userData={userData}
                additionalData={additionalData}
                groupsEdu={groupsEdu}
                groupsExp={groupsExp}
                groupsSkill={groupsSkill}
            />
        </>
    );
}

export default App;
