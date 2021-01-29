import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'antd';

import UserForm from '../../Forms/UserForm/UserForm';
import { createNewUser } from '../../../store/actions/actions';

const NewUserPopup = ({ isOpen, handleCancel }) => {
    const dispatch = useDispatch();
    
    const initialValues = {
        firstName: '',
        lastName: '',
        description: '',
        avatarLink: ''
    };

    const onSubmit = useCallback((values) => {
        const { firstName: name, lastName: surname, description: desc, avatarLink: avatar } = values;
        const data = {name, surname, desc, avatar};
        dispatch(createNewUser(data, () => handleCancel()));
    }, [handleCancel, dispatch]);

    return <Modal destroyOnClose
                  onCancel={handleCancel}
                  width={400}
                  visible={isOpen}
                  title='New User'
                  footer={null}>
        <UserForm isEdit initialValues={initialValues} onSubmit={onSubmit} onCancel={handleCancel}/>
    </Modal>;
};

export default React.memo(NewUserPopup);