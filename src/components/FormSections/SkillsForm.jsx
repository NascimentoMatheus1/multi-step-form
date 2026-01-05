import InputControl from '../InputControl';
import RemoveButton from '../Buttons/RemoveButton';
import SaveButton from '../Buttons/SaveButton';
import AddNewButton from '../Buttons/AddNewButton';

function SkillsInputsGroup({ remove, item, updateField }) {
    return (
        <div className="inputs-container">
            <RemoveButton remove={remove} id={item.id} />
            <InputControl
                text="Skill: "
                type="text"
                value={item.skill}
                onChange={(e) => {
                    updateField(item.id, {
                        skill: e.target.value,
                    });
                }}
            />
            <SaveButton updateField={updateField} item={item} />
        </div>
    );
}

export default function SkillForm({ addNew, remove, updateField, groups }) {
    return (
        <div className="section-form">
            <h1 className='section-name'>Technical Skills</h1>
            {groups.map((item, index) => (
                <div key={item.id} style={{ marginBottom: '1rem' }}>
                    <div
                        className="group-title"
                        onClick={() => {
                            updateField(item.id, { open: !item.open });
                        }}
                    >
                        {item.skill ? item.skill : 'Skill ' + (index + 1)}
                    </div>
                    {item.open && (
                        <SkillsInputsGroup
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
