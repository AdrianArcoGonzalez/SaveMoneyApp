import { ErrorMessage, Field, Form, useFormikContext } from "formik";
import Button from "../Button/Button";
import { IncomesExpensesFormikFormStyled } from "./IncomesExpensesFormikFormStyled";
import CustomInputField from "../CustomInputField/CustomInputField";
import { expensesCategoriesList } from "../../Utils/categories";
import { ExpenseIncome } from "../../interfaces/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext, useCallback } from "react";
import { UiContext } from "../../store/uiContext/uiContext";
import {
  closeExpenseFormActionCreator,
  closeIncomeFormActionCreator,
} from "../../store/actions/uiActions/uiActions";

interface IncomesExpensesFormikFormProps {
  type: "Income" | "Expense";
  update?: boolean;
}

const imageWidth = 37;

export const IncomesExpensesFormikForm = ({
  type,
  update,
}: IncomesExpensesFormikFormProps): JSX.Element => {
  const { isValid, values } = useFormikContext<ExpenseIncome>();
  const { dispatchUi } = useContext(UiContext);

  const closeForm = useCallback(() => {
    if (type === "Expense") {
      dispatchUi(closeExpenseFormActionCreator());
    }

    if (type === "Income") {
      dispatchUi(closeIncomeFormActionCreator());
    }
  }, [dispatchUi, type]);

  return (
    <IncomesExpensesFormikFormStyled>
      <Form noValidate autoComplete="off" className="form-container">
        {update ? (
          <h2 className="form-title">Update</h2>
        ) : (
          <h2 className="form-title">
            {`New ${type}`}
            <FontAwesomeIcon
              data-testid="closebutton"
              icon={faXmark}
              onClick={closeForm}
            />
          </h2>
        )}
        <div className="form-inputs-container">
          <CustomInputField
            class="form-input"
            label={`${type} name`}
            name="name"
            placeholder="Food"
            type="text"
            value={values.name}
          />

          <CustomInputField
            class="form-input"
            label={`${type} value`}
            name="quantity"
            placeholder="25"
            type="number"
            value={values.quantity}
          />

          <CustomInputField
            class="form-input"
            label={`${type} date`}
            name="date"
            placeholder="15/01/2022"
            type="date"
            value={values.date}
          />

          {type === "Expense" && (
            <>
              <div className="radio-container">
                <label htmlFor="radio-group">Choose an expense icon</label>
                <ul
                  role="group"
                  id="radio-group"
                  className="form-radio-group"
                  defaultValue={values.category.name}
                >
                  {expensesCategoriesList().map((category) => {
                    if (values.category.name === category.name) {
                      values.category.icon = category.icon;
                    }

                    return (
                      <li key={category.name}>
                        <label>
                          <Field
                            type="radio"
                            name="category.name"
                            value={category.name}
                          />
                          <img
                            src={category.icon}
                            alt="logo"
                            width={imageWidth}
                            className={
                              values.category.name === category.name
                                ? "active"
                                : ""
                            }
                          />
                        </label>
                      </li>
                    );
                  })}
                </ul>
                <ErrorMessage name={"category.name"}>
                  {(msg) => (
                    <span data-testid="errorMessage" className="errors">
                      {msg}
                    </span>
                  )}
                </ErrorMessage>
              </div>
            </>
          )}
        </div>
        <Button
          text={update ? "Update" : `Add new ${type.toLowerCase()}`}
          type="submit"
          disabled={!isValid}
        />
      </Form>
    </IncomesExpensesFormikFormStyled>
  );
};
