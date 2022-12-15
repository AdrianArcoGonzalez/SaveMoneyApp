import { render } from "@testing-library/react";
import { Formik } from "formik";
import { BrowserRouter } from "react-router-dom";
import { validateLoginSchema } from "../schemas/validateLoginSchema";
import { Wrapper } from "./Wrapper";

const renderWithFormik = (
  children: React.ReactElement,
  initialState = {},
  onSubmit = () => {}
) => {
  return render(
    <Wrapper>
      <BrowserRouter>
        <Formik
          initialValues={initialState}
          onSubmit={onSubmit}
          validationSchema={validateLoginSchema}
        >
          {children}
        </Formik>
      </BrowserRouter>
    </Wrapper>
  );
};

export default renderWithFormik;
