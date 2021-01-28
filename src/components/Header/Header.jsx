import React from 'react';
import styles from './Header.module.scss';
import {Link} from 'react-router-dom';

const Header = () => {
    return <div className={styles.headerWrapper}>
        <div className={styles.linksWrapper}>
                <Link to='/home'>Home</Link>
        </div>
    </div>;
};

export default React.memo(Header);