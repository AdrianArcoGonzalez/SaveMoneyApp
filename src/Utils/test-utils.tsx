import { render } from "@testing-library/react";
import { Formik } from "formik";
import { BrowserRouter } from "react-router-dom";
import { validateLoginSchema } from "../schemas/validateLoginSchema";

const renderWithFormik = (
  children: React.ReactElement,
  initialState = {},
  onSubmit = () => {}
) => {
  return render(
    <BrowserRouter>
      <Formik
        initialValues={initialState}
        onSubmit={onSubmit}
        validationSchema={validateLoginSchema}
      >
        {children}
      </Formik>
    </BrowserRouter>
  );
};

export default renderWithFormik;
