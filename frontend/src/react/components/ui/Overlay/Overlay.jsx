import { createPortal } from 'react-dom';
import './overlay.scss';

/**
 * Description
 * @param {number} blur 'значение для размытия от 0 до ... в px'
 * @param {number} blackout 'значение для затемнения от 0.0 до 1.0'
 * @param {number} zIndex 'значение для перекрытия: 115 (above-layout) | 104 (below-layout)'
 * @param {void} onClick 'функция для закрытия элемента'
 */
export default function Overlay({ blur, blackout, zIndex, onClick }) {
    return (
        <>
            {createPortal(
                <div className="overlay" style={{ zIndex: zIndex }} onClick={onClick}>
                    <div
                        className="overlay__blackout"
                        style={{
                            WebkitBackdropFilter: `blur(${blur}px)`,
                            backdropFilter: `blur(${blur}px)`,
                            backgroundColor: `rgba(0, 0, 0, ${blackout})`,
                        }}
                    ></div>
                </div>,
                document.body
            )}
        </>
    );
}
