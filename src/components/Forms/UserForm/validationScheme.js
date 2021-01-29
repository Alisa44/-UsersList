import * as Yup from 'yup';

export const personValidation = Yup.object().shape({
    firstName: Yup.string()
        .typeError('Name should be string')
        .trim()
        .required('Name required'),
    lastName: Yup.string()
        .typeError('Last name should be string')
        .trim()
        .required('Last name required'),
    description: Yup.string()
        .typeError('Description should be string')
        .trim()
        .required('Description required'),
    avatarLink: Yup.string()
        .trim()
});