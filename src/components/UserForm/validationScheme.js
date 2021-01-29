import * as Yup from 'yup';

export const personValidation = Yup.object().shape({
    firstName: Yup.string()
        .typeError('Name should be string')
        .trim()
        .required('Name is required'),
    lastName: Yup.string()
        .typeError('Last name should be string')
        .trim()
        .required('Last name is required'),
    description: Yup.string()
        .trim(),
    avatarLink: Yup.string()
        .trim()
});