import React from 'react';

/**
 * Элемент боковой панели.
 *
 * @param {object} props
 * @param {{ component: JSX.Element, label: string }} props.icon
 */
const SidebarItem = ({ icon }) => {
    return <li className="sidebar__item">{icon.component}</li>;
};

export default SidebarItem;
