import './main_grid.scss';

/**
 * Компонент сетки
 *
 * @param {Component} children - Элементы сетки (видео)
 */
export const MainGrid = ({ children }) => {
    return <div className="grid">{children}</div>;
};

export default MainGrid;
