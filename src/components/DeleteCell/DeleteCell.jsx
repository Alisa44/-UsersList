import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { DeleteOutlined } from '@ant-design/icons';
import { notification}  from 'antd';

import { deleteUser } from '../../store/actions/actions';

const DeleteCell = ({ id }) => {
    const dispatch = useDispatch();
    const callback = useCallback(() => notification.info({message: 'User deleted', duration: 2}), []);

    const deleteCurrentUser = useCallback(id => {
        dispatch(deleteUser(id, callback));
    }, [callback, dispatch]);
    
    return <div onClick={() => deleteCurrentUser(id)}>
        <DeleteOutlined style={{cursor: 'pointer'}}/>
    </div>;
};

export default React.memo(DeleteCell);