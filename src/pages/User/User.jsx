import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import styles from './User.module.scss';
import {useDispatch} from 'react-redux';
import {getUserById} from '../../store/actions/actions';
import UserCard from '../../components/UserCard/UserCard';

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