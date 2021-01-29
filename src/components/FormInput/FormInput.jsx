import {Input} from 'antd';
import React from 'react';
import styles from './FormInput.module.scss';

const FormInput = ({ value, onChange, onBlur, touched, error, isEdit, id, placeholder }) => {
    return isEdit || !value
        ? <div>
            <Input onChange={onChange}
                   onBlur={onBlur}
                   placeholder={placeholder}
                   id={id}
                   value={value}
                   className={error ? styles.errorInput: styles.input}/>
            {error && touched&& <span className={styles.error}>{error}</span>}
        </div>
        : <div>{value}</div>;
};

export default React.memo(FormInput);