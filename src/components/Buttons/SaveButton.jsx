export default function SaveButton({ item, updateField }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
                className="save-btn"
                type="button"
                onClick={() => {
                    updateField(item.id, { open: !item.open });
                }}
            >
                save
            </button>
        </div>
    );
}
