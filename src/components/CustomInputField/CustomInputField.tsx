import { ErrorMessage, Field } from "formik";
import CustomInputFieldStyled from "./CustomInputFieldStyled";

interface CustomFormikFieldProps {
  type: string;
  class: string;
  placeholder: string;
  label: string;
  name: string;
}

const CustomInputField = ({
  class: className,
  placeholder,
  type,
  label,
  name,
}: CustomFormikFieldProps): JSX.Element => {
  return (
    <CustomInputFieldStyled>
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      <Field
        type={type}
        className={className}
        id={name}
        name={name}
        placeholder={placeholder}
      ></Field>
      <ErrorMessage name={name}>
        {(msg) => (
          <span data-testid="errorMessage" className="errors">
            {msg}
          </span>
        )}
      </ErrorMessage>
    </CustomInputFieldStyled>
  );
};

export default CustomInputField;
