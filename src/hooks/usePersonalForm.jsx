import { useState } from 'react';

export default function usePersonalForm(initial_userData) {
    const [userData, setUserData] = useState(initial_userData);

    function updateUserFields(fields) {
        setUserData({ ...userData, ...fields });
    }

    return {
        updateUserFields,
        userData,
    };
}
