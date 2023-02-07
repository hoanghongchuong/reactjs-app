import classNames from 'classnames/bind';
import styles from './Sidebar.scss';

const cx = classNames.bind(styles);

function SidebarItemCollapse({ item }) {
    return (
        item.sidebarProps ? (
            item.child ? (
                <SidebarItemCollapse item={item} key={index} />
            ) : (
                <SidebarItem item={item} key={index} />
            )
        ) : null
    );
}

export default SidebarItemCollapse;