import { useState } from 'react';

export default function useMultiStepForm(steps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    function next() {
        setCurrentIndex((i) => {
            if (i >= steps.length - 1) return i;
            return i + 1;
        });
    }

    function back() {
        setCurrentIndex((i) => {
            if (i <= 0) return i;
            return i - 1;
        });
    }

    return {
        currentIndex,
        steps,
        step: steps[currentIndex],
        next,
        back,
        isFistStep: currentIndex === 0,
        isLastStep: currentIndex === steps.length - 1,
    };
}
