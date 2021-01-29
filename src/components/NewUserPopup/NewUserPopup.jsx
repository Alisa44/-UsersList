import React, {useCallback} from 'react';
import UserForm from '../UserForm/UserForm';
import {Modal} from 'antd';

const initialValues = {
    firstName: '',
    lastName: '',
    description: '',
    avatarLink: ''
};

const NewUserPopup = ({isOpen, handleCancel}) => {
    const onSubmit = useCallback((values, { resetForm }) => {
        console.log(values);
    }, []);

    return <Modal destroyOnClose
                  onCancel={handleCancel}
                  width={400}
                  visible={isOpen}
                  title='New User'
                  footer={null}>
        <UserForm isEdit initialValues={initialValues} onSubmit={onSubmit}/>
    </Modal>;
};

export default React.memo(NewUserPopup);