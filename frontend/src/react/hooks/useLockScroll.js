import { useLayoutEffect } from 'react';

export function useLockScroll(enabled = true) {
    useLayoutEffect(() => {
        if (!enabled) {
            return;
        }

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [enabled]);
}
