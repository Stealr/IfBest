import { useEffect } from 'react';

// пример функции:
// const handleEsc = useCallback((e) => {
//      if (e.key === 'Escape') {
//          onClose();
//      }
// }, [onClose]);

/**
 * Description - добавляет прослушивание к нажатию на кнопки.
 * Принимает функцию, где прописана какая кнопка нажата
 * @param {() => void} handler
 */
export function useKeyDown(handler) {
    useEffect(() => {
        document.addEventListener('keydown', handler);

        return () => {
            document.removeEventListener('keydown', handler);
        };
    }, [handler]);
}
