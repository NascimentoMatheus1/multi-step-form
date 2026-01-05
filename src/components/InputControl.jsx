export default function InputControl({
    text,
    type,
    value,
    onChange,
    isRequired = false,
}) {
    return (
        <div style={{ padding: '0.5rem 1rem' }}>
            <label style={{ width: '100%' }}>{text}</label>
            <br />
            {type !== 'textarea' ? (
                <input
                    style={{ width: '100%' }}
                    type={type}
                    value={value}
                    onChange={onChange}
                    required={isRequired}
                />
            ) : (
                <textarea
                    style={{ width: '100%' }}
                    type={type}
                    value={value}
                    required={isRequired}
                    onChange={onChange}
                ></textarea>
            )}
        </div>
    );
}
