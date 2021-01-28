import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Table} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import {deleteUser} from '../../store/actions/actions';

const UsersTable = () => {
    const {allUsers} = useSelector(state => state);
    const [dataSource, setDataSource] = useState([]);
    const dispatch = useDispatch();
    
    const deleteCurrentUser = id => {
        dispatch(deleteUser(id));
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => <div>{text} {record.surname}</div>
        },
        {
            title: 'Description',
            dataIndex: 'desc',
            key: 'desc',
        },
        {
            title: 'Delete',
            dataIndex: 'delete',
            key: 'delete',
            render: (text, record) => <div onClick={() => deleteCurrentUser(record.id)}>
                <DeleteOutlined style={{cursor: 'pointer'}}/>
            </div>
        },
    ];

    useEffect(() => {
        const data = allUsers.map(item => ({...item, key: item.id}));
        setDataSource(data);
    }, [allUsers]);

    return <Table dataSource={dataSource} columns={columns} pagination={{pageSize: 5}}/>;

};

export default React.memo(UsersTable);