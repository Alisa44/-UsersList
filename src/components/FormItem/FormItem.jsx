import React from 'react';
import { Input } from 'antd';
import Label from '../Label/Label';
import styles from './FormItem.module.scss';

const FormItem = ({ values, onChange, onBlur, touched, errors, isEdit, id, placeholder, label, required, name }) => {
    console.log(errors);
    console.log(id);
    return <div className={styles.inputWrapper}>
        <Label htmlFor='id' label={label} required={required}/>
        
        {isEdit ? <div>
                <Input onChange={onChange}
                       onBlur={onBlur}
                       placeholder={placeholder}
                       id={id}
                       value={values[id]}
                       name={name}
                       className={errors[id] ? styles.errorInput : styles.input}/>
                { errors[id] && touched[id] ? <span className={styles.error}>{errors[id]}</span> : null }
            </div>
            : <div>{values[id]}</div>}
    </div>;
};

export default React.memo(FormItem);