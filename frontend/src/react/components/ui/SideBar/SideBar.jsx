import React from 'react';
import './side_bar.scss';
import { sidebarIcons } from './sidebarData';
import SidebarItem from './SidebarItem';

/**
 * Глобальный компонент боковой панели с иконками.
 */
const SideBar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul className="sidebar__list">
          {sidebarIcons.map((icon, index) => (
            <SidebarItem key={index} icon={icon} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
