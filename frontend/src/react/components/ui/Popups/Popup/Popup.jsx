import { useEffect, useRef, useState, lazy } from 'react';
import { createPortal } from 'react-dom';
const Overlay = lazy(() => import('@components/ui/Overlay/Overlay'));
import './popup.scss';
import './modal.scss';

/**
 * Description - компонент для управления всплывающими окнами
 * @param {string} variant 'popover | modal'
 * @param {component} content 'содержимое попапа'
 * @param {object} position 'позиция элемента, который вызвал попап'
 * @param {void} onClose 'функция для закрытия'
 */
const Popup = ({ variant, content, position, onClose }) => {
    const ref = useRef();
    const [style, setStyle] = useState({
        position: 'absolute',
        top: 0,
        left: 0,
        visibility: 'hidden',
    });

    useEffect(() => {
        if (variant !== 'popover' || !ref.current || !position) return;

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
    }, [variant, onClose, position]);

    // useEffect'ы для modals
    useEffect(() => {
        if (variant === 'modal') {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [variant]);

    useEffect(() => {
        if (variant !== 'modal') return;

        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [variant, onClose]);

    if (variant === 'popover') {
        if (!position) return null;
        return createPortal(
            <div className="portal-popover" ref={ref} style={style}>
                {content}
            </div>,
            document.body
        );
    }

    if (variant === 'modal') {
        return createPortal(
            <>
                <Overlay blur={13} blackout={0.64} zIndex={115} onClick={onClose} />
                <div className="portal-modal" onClick={(e) => e.stopPropagation()}>
                    {content}
                </div>
            </>,
            document.body
        );
    }

    return null;
};

export default Popup;
