import React from 'react';
import {Formik} from 'formik';

import FormItem from '../FormItem/FormItem';
import ButtonBlock from '../ButtonsBlock/ButtonsBlock';
import {personValidation} from './validationScheme';

const UserForm = ({ initialValues, isEdit, onSubmit }) => {
    return <div>
        <Formik validationSchema={personValidation}
                initialValues={initialValues} onSubmit={onSubmit}>
            {({
                  values,
                  handleChange,
                  handleBlur,
                  errors,
                  touched,
              }) => <form>
                <FormItem value={values.firstName}
                           id='firstname'
                           label='First Name'
                           required
                           onCnange={handleChange}
                           onBlur={handleBlur}
                           placeholder='Enter firstname'
                           error={errors.firstName}
                           touched={touched.firstName}
                           isEdit={isEdit}/>
                <FormItem value={values.lastname}
                           id='lastname'
                           onCnange={handleChange}
                           onBlur={handleBlur}
                           label='Last Name'
                           required
                           placeholder='Enter lastname'
                           error={errors.lastname}
                           touched={touched.lastname}
                           isEdit={isEdit}/>
                <FormItem value={values.description}
                           id='description'
                           label='Description'
                           onCnange={handleChange}
                           onBlur={handleBlur}
                           placeholder='Description'
                           error={errors.description}
                           touched={touched.description}
                           isEdit={isEdit}/>
                <FormItem value={values.description}
                           id='avatarLink'
                           label='Link To Avatar'
                           onCnange={handleChange}
                           onBlur={handleBlur}
                           placeholder='Description'
                           error={errors.avatarLink}
                           touched={touched.avatarLink}
                           isEdit={isEdit}/>

            </form>}
        </Formik>
        <ButtonBlock htmlType='submit' text='Submit'/>
    </div>;
};

export default UserForm;