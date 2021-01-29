import React from 'react';
import { Formik } from 'formik';
import {Button} from 'antd';

import FormItem from '../FormItem/FormItem';
import { personValidation } from './validationScheme';
import styles from './UserForm.module.scss';

const UserForm = ({ initialValues, isEdit, onSubmit, onCancel }) => {
    return <div>
        <Formik validationSchema={personValidation}
                initialValues={initialValues}
                onSubmit={onSubmit}>
            {({
                  values,
                  handleChange,
                  handleSubmit,
                  handleBlur,
                  errors,
                  touched,
              }) => <div>
                <form>
                    <FormItem values={values}
                              id='firstName'
                              name='firstName'
                              label='First Name'
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder='Enter firstname'
                              errors={errors}
                              touched={touched}
                              isEdit={isEdit}/>
                    <FormItem values={values}
                              id='lastName'
                              name='lastName'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              label='Last Name'
                              required
                              placeholder='Enter lastname'
                              errors={errors}
                              touched={touched}
                              isEdit={isEdit}/>
                    <FormItem values={values}
                              id='description'
                              name='description'
                              label='Description'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder='Description'
                              errors={errors}
                              touched={touched}
                              isEdit={isEdit}/>
                    <FormItem values={values}
                              id='avatarLink'
                              name='avatarLink'
                              label='Link To Avatar'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder='Description'
                              errors={errors}
                              touched={touched}
                              isEdit={isEdit}/>
                </form>
                <div className={styles.buttonsWrapper}>
                    <Button onClick={onCancel}
                            children='Cancel'/>
                    <Button onClick={handleSubmit}
                            className={styles.button}
                            children='Submit'/>
                </div>
            </div>}
        </Formik>
    </div>;
};

export default UserForm;