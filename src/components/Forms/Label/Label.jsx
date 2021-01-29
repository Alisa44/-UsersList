import React from 'react';
import styles from './Label.module.scss';

const Label = ({ label, htmlFor, required}) => {
    return <label className={styles.label} htmlFor={htmlFor}>
        {label}{required && <sup className={styles.required}>*</sup>}:
    </label>;
};

export default Label;