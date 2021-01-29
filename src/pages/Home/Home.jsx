import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../store/actions/actions';
import UsersTable from '../../components/UsersTable/UsersTable';
import styles from './Home.module.scss';
import NewUserPopup from '../../components/NewUserPopup/NewUserPopup';
import ButtonBlock from '../../components/ButtonBlock/ButtonBlock';

const Home = () => {
    const [isNewUserOpen, setNewUserOpen] = useState(false);
    const dispatch = useDispatch();
    
    const handleCancel = useCallback(() => setNewUserOpen(false), []);
    const openModal = useCallback(() => setNewUserOpen(true), []);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);
    
    return <div className={styles.pageWrapper}>
        <ButtonBlock text='Add User' onClick={openModal}/>
        <UsersTable/>
        <NewUserPopup handleCancel={handleCancel} isOpen={isNewUserOpen}/>
    </div>;
};

export default React.memo(Home);