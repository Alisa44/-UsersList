import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserForm from '../Forms/UserForm/UserForm';
import EditButtons from '../EditButtons/EditButtons';
import { changeUser, setUser } from '../../store/actions/actions';
import styles from './UserCard.module.scss';

const UserCard = () => {
    const {user} = useSelector(state => state.allUsers);
    const [userData, setUserData] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            setUserData(user);
        }
    }, [dispatch, user]);
    
    useEffect(() => {
        return () => {
            setUserData({});
            dispatch(setUser(null));
        };
    }, [dispatch]);

    const onCancel = () => {
        setUserData(user);
        setIsEdit(false);
    };

    const onSubmit = (values) => {
        const {firstName: name, lastName: surname, description: desc, avatarLink: avatar} = values;
        const data = {name, surname, desc, avatar};
        dispatch(changeUser(user.id, data, () => setIsEdit(false)));
    };

    const initialValues = {
        firstName: userData.name || '',
        lastName: userData.surname || '',
        description: userData.desc || '',
        avatarLink: userData.avatar || ''
    };

    return <div className={styles.wrapper}>
        {Object.keys(userData).length ? <div>
            <EditButtons isEdit={isEdit} setIsEdit={setIsEdit}/>
            <UserForm initialValues={initialValues}
                                                  isEdit={isEdit}
                                                  onCancel={onCancel}
                                                  onSubmit={onSubmit}/>
            </div>
            : null}</div>;
};

export default React.memo(UserCard);