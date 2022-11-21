import CardStyled from "./CardStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardProps {
  moneySaved: number;
  income: number;
  spend: number;
  limit?: number | null;
  currencyType: "€" | "$";
}

const Card = ({
  income,
  limit,
  moneySaved,
  spend,
  currencyType,
}: CardProps): JSX.Element => {
  return (
    <CardStyled>
      {limit ? (
        <div className="card-limit">
          <h2>Limit for this month</h2>
          <span>
            {currencyType}
            {limit}
          </span>

          <span>grafico</span>

          <span>
            {spend}/{limit}
          </span>
        </div>
      ) : (
        <div className="card-money-saved">
          <h2 className="card-title">Money Saved</h2>
          <span className="card-main-info">
            {currencyType} {moneySaved}
          </span>

          <div className="money-stats">
            <section className="money-stats-specific">
              <FontAwesomeIcon icon={"arrow-up-long"} />

              <div className="money-income">
                <span className="money-income-title">Income</span>
                <span className="money-income">
                  {currencyType} {income}
                </span>
              </div>
            </section>
            <div>
              <span>Spend</span>
              <div>
                <span>
                  {currencyType} {spend}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </CardStyled>
  );
};

export default Card;
