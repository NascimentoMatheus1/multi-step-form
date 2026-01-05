export default function ControlButtons({ index, item, remove, updateField, text }) {
    return (
        <p>
            <span>
                {' '}
                {text} - {index}
            </span>
            <button
                type="button"
                onClick={() => {
                    updateField(item.id, { open: !item.open });
                }}
            >
                {item.open ? ' save ' : ' edit '}
            </button>
            <button
                type="button"
                onClick={() => {
                    remove(item.id);
                }}
            >
                x
            </button>
        </p>
    );
}