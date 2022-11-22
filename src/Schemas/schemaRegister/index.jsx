import * as yup from 'yup'

export const schemaRegister = yup.object({
    name: yup.string()
            .required('Campo Obrigatório'),
    email: yup.string()
            .required('Campo Obrigatório'),
    password: yup.string()
            .required('Campo Obrigatório')

})
