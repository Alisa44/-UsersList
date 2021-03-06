import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Table} from 'antd';

import UserNameCell from './UserNameCell/UserNameCell';
import DeleteCell from './DeleteCell/DeleteCell';

const UsersTable = () => {
    const { users } = useSelector(state => state.allUsers);
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        if (users?.length) {
            const data = users.map(item => ({...item, key: item.id}));
            setDataSource(data);
        }
    }, [users]);

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
            render: (text, record) => <UserNameCell user={record}/>
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
            render: (text, record) => <DeleteCell id={record.id}/>
        },
    ];

    return <Table dataSource={dataSource} columns={columns} pagination={{pageSize: 5}}/>;

};

export default React.memo(UsersTable);