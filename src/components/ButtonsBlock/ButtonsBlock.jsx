import React from 'react';
import {Button} from 'antd';
import styles from './ButtonBlock.module.scss';

const ButtonBlock = ({ text,  onClick = () => {}, htmlType }) => {
    return <div className={styles.buttonWrapper}>
        <Button htmlType={htmlType} onClick={onClick} children={text} className={styles.button}/>
    </div>;
};

export default React.memo(ButtonBlock);