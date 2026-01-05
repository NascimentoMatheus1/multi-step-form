import InputControl from '../InputControl';

export default function UserForm({
    name,
    email,
    phone,
    occupation,
    about,
    updateData,
}) {
    return (
        <div className="section-form">
            <h1 className="section-name">Personal details</h1>
            <div>
                <InputControl
                    text="Name: "
                    type="text"
                    value={name}
                    isRequired={true}
                    onChange={(e) => {
                        updateData({ name: e.target.value });
                    }}
                />
                <InputControl
                    text="Occupation: "
                    type="text"
                    value={occupation}
                    isRequired={true}
                    onChange={(e) => {
                        updateData({ occupation: e.target.value });
                    }}
                />
                <InputControl
                    text="Email: "
                    type="mail"
                    value={email}
                    isRequired={true}
                    onChange={(e) => {
                        updateData({ email: e.target.value });
                    }}
                />
                <InputControl
                    text="Phone : "
                    type="tel"
                    value={phone}
                    isRequired={true}
                    onChange={(e) => {
                        updateData({ phone: e.target.value });
                    }}
                />
            </div>
        </div>
    );
}
