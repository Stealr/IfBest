import React from 'react';

/**
 * Элемент боковой панели.
 *
 * @param {object} props
 * @param {{ component: JSX.Element, label: string }} props.icon
 */
const SidebarItem = ({ icon }) => {
  return (
    <li
      className="sidebar__item"
      title={icon.label}
      aria-label={icon.label}
      role="button"
      tabIndex={0}
    >
      {icon.component}
    </li>
  );
};

export default SidebarItem;
