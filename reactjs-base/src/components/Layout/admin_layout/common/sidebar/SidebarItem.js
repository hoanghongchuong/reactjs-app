import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import classNames from 'classnames/bind';
import './Sidebar.scss';
// import { Link } from 'react-router-dom';

// const cx = classNames.bind(styles);

function SidebarItem({ item }) {
    const { appState } = useSelector(state => state.appState);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(appState.includes(item.state)) {
            setOpen(true)
        }
    })


    if (item.child) {
        return (
            <div className={(open ? 'sidebar-item open' : 'sidebar-item')}>
                <div className={('sidebar-title')} onClick={() => setOpen((!open))}>
                    <span>
                        {item.sidebarProps.icon && <i className={item.sidebarProps.icon}></i>}
                        {item.sidebarProps.displayText}
                    </span>
                    {open ? <i className='bx bx-chevron-up toggle-btn'></i> : <i className='bx bx-chevron-down toggle-btn'></i>}
                </div>
                <div className={('sidebar-content')}>
                    {item.child.map((child, index) => <SidebarItem key={index} item={child} />)}
                </div>
            </div>
        );
    } else {
        return (
            <Link to={item.path} className='sidebar-item plain' style={{
             backgroundColor:  appState === item.state ?  'rgba(255, 255, 255, .1)' : 'unset',
            }}>
                {item.sidebarProps && <i className={item.sidebarProps.icon}></i>}
                <span>{item.sidebarProps.displayText}</span>
            </Link>
        );
    }

}

export default SidebarItem;