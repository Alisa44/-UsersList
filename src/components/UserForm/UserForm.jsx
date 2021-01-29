import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Input} from 'antd';
import {Formik} from 'formik';

import FormInput from '../FormInput/FormInput';
import {personValidation} from './validationScheme';
import styles from './UserForm.module.scss';
import Label from "../Label/Label";

const UserForm = ({ initialValues, isEdit, onSubmit }) => {
    return <Formik validationSchema={personValidation}
                   initialValues={initialValues} onSubmit={onSubmit}>
        {({
              values,
              handleChange,
              handleSubmit,
              handleBlur,
              errors,
              touched,
          }) => <form className={styles.form}>
            <Label htmlFor='firstname' label='First Name' required/>
            <FormInput value={values.firstName}
                       id='firstname'
                       onCnange={handleChange}
                       onBlur={handleBlur}
                       placeholder='Enter firstname'
                       error={errors.firstName}
                       touched={touched.firstName}
                       isEdit={isEdit}/>
        </form>}
    </Formik>;
};

export default UserForm;