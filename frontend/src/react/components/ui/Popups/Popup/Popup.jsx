import { useRef, useLayoutEffect, useState, lazy, useCallback } from 'react';
import { createPortal } from 'react-dom';
const Overlay = lazy(() => import('@components/ui/Overlay/Overlay'));

import { useLockScroll } from '@hooks/useLockScroll';
import { useKeyDown } from '@hooks/useKeyDown';

import './popup.scss';
import './modal.scss';

/**
 * Description - компонент для управления всплывающими окнами
 * @param {'popover' | 'modal'} variant - тип окна
 * @param {React.ReactNode} content - содержимое
 * @param {DOMRect} [position] - позиция элемента (для popover)
 * @param {() => void} onClose - функция для закрытия
 */
const Popup = ({ variant, content, position, onClose }) => {
    const contentRef = useRef(null);
    const [style, setStyle] = useState({
        position: 'absolute',
        top: 0,
        left: 0,
        visibility: 'hidden',
    });

    // --- ОБЩАЯ ЛОГИКА ---
    const handleEsc = useCallback((e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        }, [onClose]);
    useKeyDown(handleEsc);

    // --- ЛОГИКА ДЛЯ POPOVER ---
    useLayoutEffect(() => {
        if (variant !== 'popover' || !contentRef.current || !position) return;

        const popoverRect = contentRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;

        let left = position.left + position.width - popoverRect.width;

        if (left < 8) left = 8;
        if (left + popoverRect.width > viewportWidth) {
            left = viewportWidth - popoverRect.width - 8;
        }

        setStyle({
            position: 'absolute',
            top: `${position.bottom + 4}px`,
            left: `${left}px`,
            visibility: 'visible',
        });

        const handleClickOutside = (e) => {
            if (!contentRef.current) return;

            const clickX = e.clientX;
            const clickY = e.clientY;

            const clickedInsidePopup = contentRef.current.contains(e.target);

            const insidePosition =
                clickX >= position.left &&
                clickX <= position.left + position.width &&
                clickY >= position.top &&
                clickY <= position.top + position.height;

            if (!clickedInsidePopup && !insidePosition) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [variant, position]);

    // --- ЛОГИКА ДЛЯ MODAL ---
    useLockScroll(variant === 'modal');

    if (variant === 'popover') {
        if (!position) return null;
        return createPortal(
            <div className="portal-popover" ref={contentRef} style={style}>
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
