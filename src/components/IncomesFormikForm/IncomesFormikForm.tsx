import { Field, Form, useFormikContext } from "formik";
import UserContext from "../../store/UserContext/UserContext";
import Button from "../Button/Button";
import { useContext } from "react";
import CustomInputField from "../CustomInputField/CustomInputField";
import { IncomesFormikFormStyled } from "./IncomesFormikFormStyled";
import { IncomesValues } from "../../interfaces/interfaces";
interface IncomesFormikFormProps {
  type: "initial" | "update";
  onClick?: () => void;
}

export const IncomesFormikForm = ({
  type,
  onClick,
}: IncomesFormikFormProps) => {
  let { isValid, values } = useFormikContext<IncomesValues>();
  const { user } = useContext(UserContext);

  return (
    <IncomesFormikFormStyled>
      <Form noValidate autoComplete="off" className="form-container">
        {type === "initial" && (
          <>
            {" "}
            <h3 className="form-container__title">{`Welcome ${user.userName}`}</h3>
            <span className="form-container__intro-text">
              Before starting we need to to ask some questions
            </span>
          </>
        )}

        <CustomInputField
          label="Monthly incomes?"
          name="incomes"
          class="form-container__input"
          placeholder="1500"
          type="number"
          value={values.incomes}
        />

        <div className="form-container__radio-group">
          <label id="my-radio-group" className="radio-group__label">
            Choose your currency
          </label>
          <div
            role="group"
            aria-labelledby="my-radio-group"
            className="radio-group__radio-buttons"
            defaultValue={values.currency}
          >
            <label htmlFor="€">
              <Field id="€" type="radio" name="currency" value="€" />€
            </label>

            <label htmlFor="$">
              <Field id="$" type="radio" name="currency" value="$" />$
            </label>
          </div>
        </div>

        <CustomInputField
          label="Wich is your savings target?"
          name="saving"
          class="form-container__input"
          placeholder="25000"
          type="number"
          value={values.saving}
        />

        {type === "update" && (
          <Button text="Send" type="submit" disabled={!isValid} />
        )}

        {type === "initial" && (
          <Button text="Send" type="submit" disabled={!isValid} />
        )}
      </Form>
    </IncomesFormikFormStyled>
  );
};
