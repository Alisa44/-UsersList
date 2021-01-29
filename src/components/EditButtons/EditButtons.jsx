import React from 'react';
import { Tooltip, Button } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import styles from './EditButtons.module.scss';

const EditButtons = ({isEdit, setIsEdit}) => {

    return <div className={styles.wrapper}>
            {!isEdit ? <Tooltip title='Cancel'>
                    <Button onClick={() => setIsEdit(true)} className={styles.iconBtn}>
                        <FormOutlined/>
                    </Button>
                </Tooltip>
                : null}
    </div>;
};

export default EditButtons;