import { Formik, Form, Field, type FieldProps, useFormik } from "formik";
import * as yup from "yup";

interface IForm {
  name: string;
  age: number;
}


const ValidationSchema = yup.object({
  name: yup.string().required('IS REQUIRED'),
  age: yup.number().required(),
});

const init: IForm = {
  name: "",
  age: 3,
};


export const FormikComponent = () => {



  return (
    <div>
      <Formik
        initialValues={init}
        onSubmit={(val) => {
          console.log(val);
        }}
        validationSchema={ValidationSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="name" >
              {({ field, meta }: FieldProps) => (
                <>
                  <input {...field} />
                  {meta.touched && <div>{meta.error}</div>}
                </>
              )}
            </Field>
            <div>{errors['name']}</div>

            <Field name="age" />

            <button type="submit">Submit</button>

            <pre>{JSON.stringify(errors, null, 4)}</pre>
            {/* <pre>{JSON.stringify(touched, null, 4)}</pre> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};



export const FormikHooks = () => {

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: init,
    onSubmit: (values, form) => {

      form.resetForm();
    },
    validationSchema:ValidationSchema
  });

  return <>
    <form onSubmit={handleSubmit}>

      <input 
        type="text"
        name='name'
        onChange={handleChange}
        value={values.name}
      />

      <input 
        type="number" 
        name='age'
        onChange={handleChange}
        value={values.age}
      />

      <button type='submit'>Submit</button>
    </form>
  </>
}

export default FormikComponent;
