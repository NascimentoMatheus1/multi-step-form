import InputControl from '../InputControl';

export default function AdditionalForm({
    about,
    portfolio,
    linkedin,
    updateData,
}) {
    return (
        <div className="section-form">
            <h1 className="section-name">Additional</h1>
            <div>
                <InputControl
                    text="Sumary:"
                    type="textarea"
                    value={about}
                    isRequired={true}
                    onChange={(e) => {
                        updateData({ about: e.target.value });
                    }}
                />
                <InputControl
                    text="Portfolio:"
                    type="text"
                    value={portfolio}
                    onChange={(e) => {
                        updateData({ portfolio: e.target.value });
                    }}
                />
                <InputControl
                    text="LinkedIn: "
                    type="text"
                    value={linkedin}
                    onChange={(e) => {
                        updateData({ linkedin: e.target.value });
                    }}
                />
            </div>
        </div>
    );
}
