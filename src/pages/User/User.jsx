import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import UserCard from '../../components/UserCard/UserCard';
import { getUserById } from '../../store/actions/actions';
import styles from './User.module.scss';

const User = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) dispatch(getUserById(id));
    }, [dispatch, id]);

    return <div className={styles.pageWrapper}>
        <UserCard/>
    </div>;
};

export default React.memo(User);