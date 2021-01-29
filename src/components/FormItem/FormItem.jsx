import React from 'react';
import { Input } from 'antd';
import Label from '../Label/Label';
import styles from './FormItem.module.scss';

const FormItem = ({ value, onChange, onBlur, touched, error, isEdit, id, placeholder, label, required }) => {
    return <div className={styles.inputWrapper}>
        <Label htmlFor='id' label={label} required={required}/>
        
        {isEdit || !value
            ? <div>
                <Input onChange={onChange}
                       onBlur={onBlur}
                       placeholder={placeholder}
                       id={id}
                       value={value}
                       className={error ? styles.errorInput : styles.input}/>
                {error && touched && <span className={styles.error}>{error}</span>}
            </div>
            : <div>{value}</div>}
    </div>;
};

export default React.memo(FormItem);