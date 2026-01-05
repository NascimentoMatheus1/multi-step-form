import { useState } from 'react';

export default function useGroupForm(data) {
    const [groups, setGroups] = useState(data);

    function addNew() {
        setGroups([
            ...groups,
            {
                id: Date.now(),
                institution: '',
                degree: '',
                endDate: '',
                honors: '',
                open: true,
            },
        ]);
    }

    function remove(id) {
        setGroups(groups.filter((item) => item.id !== id));
    }

    function updateField(id, field) {
        setGroups(
            groups.map((item) =>
                item.id === id ? { ...item, ...field } : item
            )
        );
    }

    return {
        addNew,
        remove,
        updateField,
        groups,
    };
}
