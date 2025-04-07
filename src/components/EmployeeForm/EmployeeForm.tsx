import { useFormik } from "formik";
import * as Yup from 'yup'
import Input from "../Input/Input";
import { CheckboxInput, EmployeeFormComponent, Title } from "./styles";
import Button from "../Button/Button";
import { EmployeeFormValues } from "./types";


function EmployeeForm() {

    const schema = Yup.object().shape({
        name: Yup.string()
            .required('Field name is required')
            .max(50, 'Max 50 symbols')
            .min(5, 'Min 5 symbols'),
        age: Yup.number()
            .typeError('Age must be a number')
            .required('Field age is required')
            .min(18, 'Min age is 18')
            .max(85, 'Max age is 85'),
            terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'), // Проверка, что checkbox выбран
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            terms: false,
        } as EmployeeFormValues,
        validationSchema: schema,
        validateOnChange: false,
        onSubmit: (values: EmployeeFormValues) => {
            console.table(values);
        }
    });

    return (


        <EmployeeFormComponent onSubmit={formik.handleSubmit}>
            <Title>Employee Form</Title>
            <Input
                name='name'
                label='Name *'
                id='name_id'
                placeholder="Enter your name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.errors.name}            />

            <Input
                name='age'
                label='Age *'
                id='age_id'
                placeholder='Enter your age'
                value={formik.values.age}
                onChange={formik.handleChange}
                error={formik.errors.age}
            />
             <CheckboxInput
                name='terms'
                type="checkbox"
                id='terms_id'
                checked={formik.values.terms}
                onChange={formik.handleChange}
            />
           <Button name='SUBMIT' />


        </EmployeeFormComponent>

    )
}

export default EmployeeForm;