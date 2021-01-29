import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../store/actions/actions';
import UsersTable from '../../components/UsersTable/UsersTable';
import styles from './Home.module.scss';

const Home = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);
    
    return <div className={styles.pageWrapper}>
        <UsersTable/>
    </div>;
};

export default React.memo(Home);