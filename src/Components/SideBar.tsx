// Sidebar.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTachometerAlt,
    faShoppingCart,
    faUsers,
    faEnvelope,
    faBox,
    faPlug,
    faChartLine,
    faFileInvoice,
    faTag,
    faCog,
    faShieldAlt,
    faLifeRing,
} from '@fortawesome/free-solid-svg-icons';

// Define the type for the icon keys
type IconName =
    | 'tachometer-alt'
    | 'shopping-cart'
    | 'users'
    | 'envelope'
    | 'box'
    | 'plug'
    | 'chart-line'
    | 'file-invoice'
    | 'tag'
    | 'cog'
    | 'shield-alt'
    | 'life-ring';

// Create a map of icon names to FontAwesomeIcon definitions
const icons: Record<IconName, any> = {
    'tachometer-alt': faTachometerAlt,
    'shopping-cart': faShoppingCart,
    users: faUsers,
    envelope: faEnvelope,
    box: faBox,
    plug: faPlug,
    'chart-line': faChartLine,
    'file-invoice': faFileInvoice,
    tag: faTag,
    cog: faCog,
    'shield-alt': faShieldAlt,
    'life-ring': faLifeRing,
};

interface SidebarProps {
    items: { name: string; link: string; icon: IconName }[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
    return (
        <div className="sidebar">
            <ul>
                {items.map((item) => (
                    <li key={item.name}>
                        <a href={item.link}>
                            <FontAwesomeIcon icon={icons[item.icon]} />
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
