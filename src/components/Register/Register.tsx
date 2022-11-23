import { Formik } from "formik";
import useUser from "../../hooks/useUser/useUser";
import { UserRegister } from "../../interfaces/interfaces";
import { validateRegisterSchema } from "../../schemas/validateRegisterSchema";
import { RegisterFormikForm } from "../RegisterFormikForm/RegisterFormikForm";
import RegisterStyled from "./RegisterStyled";

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
    <RegisterStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={validateRegisterSchema}
        onSubmit={(values, { resetForm }) => {
          resetForm({ values: initialValues });
          registerUser(values);
        }}
      >
        <RegisterFormikForm />
      </Formik>
    </RegisterStyled>
  );
};

export default Register;
