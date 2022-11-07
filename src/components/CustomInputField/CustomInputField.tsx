import { ErrorMessage, Field } from "formik";
import CustomInputFieldStyled from "./CustomInputFieldStyled";

interface CustomFormikFieldProps {
  type: string;
  classname: string;
  placeholder: string;
  label: string;
  name: string;
}

const CustomInputField = ({
  classname,
  placeholder,
  type,
  label,
  name,
}: CustomFormikFieldProps): JSX.Element => {
  return (
    <CustomInputFieldStyled>
      <label htmlFor={name}>{label}</label>
      <Field
        type={type}
        classname={classname}
        id={name}
        name={name}
        placeholder={placeholder}
      ></Field>
      <ErrorMessage name={name}>{(msg) => <span>{msg}</span>}</ErrorMessage>
    </CustomInputFieldStyled>
  );
};

export default CustomInputField;
