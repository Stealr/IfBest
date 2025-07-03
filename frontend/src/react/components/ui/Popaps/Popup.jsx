import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './popup.scss';

const Popup = ({ content, position, onClose }) => {
    const ref = useRef();
    console.log(position);
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

        // Позиция слева от якоря, чтобы правые границы совпали
        let calculatedLeft = anchorRight - popupWidth;

        // Проверка выхода за левую границу экрана
        if (calculatedLeft < 0) {
            calculatedLeft = 8; // отступ от левого края, если совсем не помещается
        }

        // Проверка выхода за правую границу (на всякий случай)
        if (calculatedLeft + popupWidth > viewportWidth) {
            calculatedLeft = viewportWidth - popupWidth - 8; // отступ от правого края
        }

        setStyle({
            position: 'absolute',
            top: position.bottom,
            left: calculatedLeft,
                // popupRect.width + position.left > window.innerWidth
                //     ? position.left - popupRect.width * 0.91
                //     : position.left,
            visibility: 'visible',
        });

        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
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

    // const style = {
    //     position: 'absolute',
    //     top: position.top,
    //     left: position.left - ,
    // };

    return createPortal(
        <div className="portal" ref={ref} style={style}>
            {content}
        </div>,
        document.body
    );
};

export default Popup;
