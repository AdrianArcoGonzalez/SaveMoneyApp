import { Field, Form, useFormikContext } from "formik";
import Button from "../Button/Button";

import CustomInputField from "../CustomInputField/CustomInputField";
import { IncomesFormikFormStyled } from "./IncomesFormikFormStyled";

export const IncomesFormikForm = () => {
  let { isValid } = useFormikContext();

  return (
    <IncomesFormikFormStyled>
      <Form noValidate autoComplete="off" className="form-container">
        <CustomInputField
          label="Monthly incomes?"
          name="incomes"
          class="form-input"
          placeholder="1500"
          type="number"
        />

        <div className="form-container__radio-group">
          <label id="my-radio-group">Choose your currency</label>
          <div role="group" aria-labelledby="my-radio-group">
            <Field
              className="form-radio"
              type="radio"
              name="currency"
              value="€"
            />
            €
            <Field
              className="form-radio"
              type="radio"
              name="currency"
              value="$"
            />
            $
          </div>
        </div>

        <CustomInputField
          label="Wich is your savings target?"
          name="saving"
          class="form-input"
          placeholder="25000"
          type="number"
        />

        <Button text="Send" type="submit" disabled={!isValid} />
      </Form>
    </IncomesFormikFormStyled>
  );
};
