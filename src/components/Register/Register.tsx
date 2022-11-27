import { Formik } from "formik";
import useUser from "../../hooks/useUser/useUser";
import { UserRegister } from "../../interfaces/interfaces";
import { validateRegisterSchema } from "../../schemas/validateRegisterSchema";
import { RegisterFormikForm } from "../RegisterFormikForm/RegisterFormikForm";

const initialValues: UserRegister = {
  userName: "",
  password: "",
  confirmPassword: "",
  email: "",
  confirmEmail: "",
};
const Register = (): JSX.Element => {
  const { registerUser } = useUser();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateRegisterSchema}
      onSubmit={async (values, { resetForm }) => {
        if (await registerUser(values)) {
          resetForm({ values: initialValues });
        }
      }}
    >
      <RegisterFormikForm />
    </Formik>
  );
};

export default Register;
