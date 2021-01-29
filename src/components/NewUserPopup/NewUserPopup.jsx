import React, {useCallback} from 'react';
import UserForm from '../UserForm/UserForm';
import {Modal} from 'antd';

const NewUserPopup = ({ isOpen, handleCancel }) => {
    const initialValues = {
        firstName: '',
        lastName: '',
        description: '',
        avatarLink: ''
    };

    const onSubmit = useCallback((values) => {
        console.log(values);
        handleCancel();
    }, [handleCancel]);

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