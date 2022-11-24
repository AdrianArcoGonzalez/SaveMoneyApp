import { Field, Form, useFormikContext } from "formik";
import UserContext from "../../store/UserContext/UserContext";
import Button from "../Button/Button";
import { useContext } from "react";

import CustomInputField from "../CustomInputField/CustomInputField";
import { IncomesFormikFormStyled } from "./IncomesFormikFormStyled";
import mockUser from "../../Utils/mockBack";

export const IncomesFormikForm = () => {
  let { isValid } = useFormikContext();
  const { user } = useContext(UserContext);

  return (
    <IncomesFormikFormStyled>
      <Form noValidate autoComplete="off" className="form-container">
        <h3 className="form-container__title">{`Welcome ${user.userName}`}</h3>
        <span className="form-container__intro-text">
          Before starting we need to to ask some questions
        </span>

        <CustomInputField
          label="Monthly incomes?"
          name="incomes"
          class="form-container__input"
          placeholder="1500"
          type="number"
        />

        <div className="form-container__radio-group">
          <label id="my-radio-group" className="radio-group__label">
            Choose your currency
          </label>
          <div
            role="group"
            aria-labelledby="my-radio-group"
            className="radio-group__radio-buttons"
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
        />

        <Button text="Send" type="submit" disabled={!isValid} />
      </Form>
    </IncomesFormikFormStyled>
  );
};
