import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return <header className={cx('wrapper')}>
        <i className='bx bx-user'></i>
        <i className='bx bxl-graphql bx-lg'></i>
        <i className='bx bxl-facebook-square'></i>
        <i className='bx bxs-heart bx-border'></i>
        <i className='bx bxs-heart bx-border-circle'></i>
        <i className='bx bx-loader bx-spin bx-md'></i>
        <i className='bx bx-loader bx-spin-hover bx-lg'></i>
        <div className='row'>
            <div className='col-6'>
                col 6
            </div>
            <div className='col-5'>
                col 5
            </div>
            <div className='col-1'>
                col 1
            </div>
            <div className='col-2'>
                col 2
            </div>
        </div>
    </header>;
}

export default Header;
