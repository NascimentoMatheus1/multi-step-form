export default function AddNewButton({ addNew }) {
    return (
        <button
            className="add-btn"
            type="button"
            onClick={addNew}
            style={{ alignSelf: 'center', marginBottom: '.5rem' }}
        >
            Add
        </button>
    );
}
