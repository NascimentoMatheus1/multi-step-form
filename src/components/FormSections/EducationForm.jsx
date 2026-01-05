import InputControl from '../InputControl';
import RemoveButton from '../Buttons/RemoveButton';
import SaveButton from '../Buttons/SaveButton';
import AddNewButton from '../Buttons/AddNewButton';

function EducationInputsGroup({ remove, item, updateField }) {
    return (
        <div className="inputs-container">
            <RemoveButton remove={remove} id={item.id} />
            <InputControl
                text="Institution: "
                type="text"
                value={item.institution}
                onChange={(e) => {
                    updateField(item.id, {
                        institution: e.target.value,
                    });
                }}
            />
            <InputControl
                text="Degree: "
                type="text"
                value={item.degree}
                onChange={(e) => {
                    updateField(item.id, {
                        degree: e.target.value,
                    });
                }}
            />
            <InputControl
                text="Graduation Date: "
                type="month"
                value={item.endDate}
                onChange={(e) => {
                    updateField(item.id, {
                        endDate: e.target.value,
                    });
                }}
            />
            <InputControl
                text="Honors: "
                type="text"
                value={item.honors}
                onChange={(e) => {
                    updateField(item.id, {
                        honors: e.target.value,
                    });
                }}
            />
            <SaveButton updateField={updateField} item={item} />
        </div>
    );
}

export default function EducationForm({ addNew, remove, updateField, groups }) {
    return (
        <div className='section-form'>
            <h1 className='section-name'>Education</h1>
            {groups.map((item, index) => (
                <div key={item.id} style={{ marginBottom: '1rem' }}>
                    <div
                        className="group-title"
                        onClick={() => {
                          updateField(item.id, { open: !item.open });
                        }}
                    >
                        {item.institution
                            ? item.institution
                            : 'Education ' + (index + 1)}
                    </div>
                    {item.open && (
                        <EducationInputsGroup
                            item={item}
                            updateField={updateField}
                            remove={remove}
                            index={index}
                        />
                    )}
                </div>
            ))}
            <AddNewButton addNew={addNew} />
        </div>
    );
}
