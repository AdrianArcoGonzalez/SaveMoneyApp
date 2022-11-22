import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Given a Card component", () => {
  describe("When it's instantiated with income, money, spend and currency type", () => {
    test("Then it should render a card with the data", () => {
      const data = {
        currency: "$",
        spend: 1000,
        income: 3000,
        moneySaved: 2000,
      };
      const titleCard = "Money saved";

      render(
        <Card
          currencyType="$"
          spend={data.spend}
          income={data.income}
          moneySaved={data.moneySaved}
        />
      );
      const title = screen.getByText(titleCard);
      const moneySave = screen.getByText(`${data.currency} ${data.moneySaved}`);
      const income = screen.getByText(`${data.currency} ${data.income}`);
      const spend = screen.getByText(`${data.currency} ${data.spend}`);

      expect(title).toBeInTheDocument();
      expect(moneySave).toBeInTheDocument();
      expect(income).toBeInTheDocument();
      expect(spend).toBeInTheDocument();
    });
  });
});
