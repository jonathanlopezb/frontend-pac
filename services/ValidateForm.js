import * as yup from 'yup';

export const userSchema = yup.object().shape({
    name: yup.string().required(),
    surname: yup.string(),
    firt_lastname: yup.string().required(),
    second_lastname: yup.string(),
    email: yup.string().email().required(),
    phone: yup.number().required(),
    address: yup.string().required(),
    city: yup.string().required(),
    institution: yup.string().required(),
    profesion: yup.string().required(),
    conocimiento: yup.string().required(),
    sexo: yup.string().required(),
    name_project: yup.string().required(),
    nationality: yup.string().required(),
});