import { useState } from 'react';
import classNames from 'classnames/bind';
import './Sidebar.scss';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const cx = classNames.bind(styles);

function SidebarItem({ item }) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };

    if (item.child) {
        return (
            <div className={(open ? 'sidebar-item open' : 'sidebar-item')}>
                <div className={('sidebar-title')}>
                    <span>
                        {item.sidebarProps.icon && <i className={item.sidebarProps.icon}></i>}
                        {item.sidebarProps.displayText}
                    </span>
                    <i className='bx bx-chevron-down toggle-btn' onClick={() => handleOpen()}></i>
                </div>
                <div className={('sidebar-content')}>
                    {item.child.map((child, index) => <SidebarItem key={index} item={child} />)}
                </div>
            </div>
        );
    } else {
        return (
            <Link to={item.path} className={('sidebar-item plain')}>
                {item.sidebarProps.icon && <i className={item.sidebarProps.icon}></i>}
                <span>{item.sidebarProps.displayText}</span>
            </Link>
        );
    }

}

export default SidebarItem;