import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UserNameCell.module.scss';

const UserNameCell = ({ user }) => {
    const { name, surname, id } = user;
    return <div className={styles.userLink}>
        <Link to={`/user/${id}`}>{name} {surname}</Link>
    </div>;
};

export default React.memo(UserNameCell);