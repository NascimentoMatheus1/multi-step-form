export default function RemoveButton({ id, remove }) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-end',
            }}
        >
            <button
                className="remove-btn"
                type="button"
                onClick={() => {
                    remove(id);
                }}
            >
                x
            </button>
        </div>
    );
}
