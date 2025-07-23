import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './popup.scss';

const Popup = ({ content, position, onClose }) => {
    const ref = useRef();
    const [style, setStyle] = useState({
        position: 'absolute',
        top: 0,
        left: 0,
        visibility: 'hidden',
    });

    useEffect(() => {
        if (!ref.current) return;

        const popupRect = ref.current.getBoundingClientRect();
        const anchorRight = position.left + position.width;
        const popupWidth = popupRect.width;
        const viewportWidth = window.innerWidth;

        let calculatedLeft = anchorRight - popupWidth;

        if (calculatedLeft < 0) {
            calculatedLeft = 8;
        }

        if (calculatedLeft + popupWidth > viewportWidth) {
            calculatedLeft = viewportWidth - popupWidth - 8;
        }

        setStyle({
            position: 'absolute',
            top: position.bottom,
            left: calculatedLeft,
            visibility: 'visible',
        });

        const handleClickOutside = (e) => {
            if (!ref.current) return;

            const clickX = e.clientX;
            const clickY = e.clientY;

            const clickedInsidePopup = ref.current.contains(e.target);

            const insidePosition =
                clickX >= position.left &&
                clickX <= position.left + position.width &&
                clickY >= position.top &&
                clickY <= position.top + position.height;

            if (!clickedInsidePopup && !insidePosition) {
                onClose();
            }
        };

        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEsc);
        };
    }, [onClose, position]);

    if (!position) return null;

    return createPortal(
        <div className="portal" ref={ref} style={style}>
            {content}
        </div>,
        document.body
    );
};

export default Popup;
