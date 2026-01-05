import InputControl from '../InputControl';
import RemoveButton from '../Buttons/RemoveButton';
import SaveButton from '../Buttons/SaveButton';
import AddNewButton from '../Buttons/AddNewButton';

function ExpienceInputsGroup({ remove, item, updateField }) {
    return (
        <div className="inputs-container">
            <RemoveButton remove={remove} id={item.id} />
            <InputControl
                text="Company: "
                type="text"
                value={item.company}
                onChange={(e) => {
                    updateField(item.id, {
                        company: e.target.value,
                    });
                }}
            />
            <InputControl
                text="Title: "
                type="text"
                value={item.title}
                onChange={(e) => {
                    updateField(item.id, {
                        title: e.target.value,
                    });
                }}
            />
            <InputControl
                text="Start Date: "
                type="month"
                value={item.startDate}
                onChange={(e) => {
                    updateField(item.id, {
                        startDate: e.target.value,
                    });
                }}
            />
            <InputControl
                text="End Date: "
                type="month"
                value={item.endDate}
                onChange={(e) => {
                    updateField(item.id, {
                        endDate: e.target.value,
                    });
                }}
            />
            <InputControl
                text="Description: "
                type="text"
                value={item.description}
                onChange={(e) => {
                    updateField(item.id, {
                        description: e.target.value,
                    });
                }}
            />
            <SaveButton updateField={updateField} item={item} />
        </div>
    );
}

export default function ExperienceForm({
    addNew,
    remove,
    updateField,
    groups,
}) {
    return (
        <div className="section-form">
            <h1 className="section-name">Experience</h1>
            {groups.map((item, index) => (
                <div key={item.id} style={{ marginBottom: '1rem' }}>
                    <div
                        className="group-title"
                        onClick={() => {
                            updateField(item.id, { open: !item.open });
                        }}
                    >
                        {item.company
                            ? item.company
                            : 'Experience ' + (index + 1)}
                    </div>
                    {item.open && (
                        <ExpienceInputsGroup
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
