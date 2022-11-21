import CardStyled from "./CardStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

interface CardProps {
  moneySaved?: number;
  income?: number;
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
          <h2 className="card-title">Limit for this month</h2>
          <span className="card-main-info">
            {currencyType}
            {limit}
          </span>
          <div className="spend-grafic">
            <span>progressBar</span>

            <span className="spend-limit">
              {spend}/{limit}
            </span>
          </div>
        </div>
      ) : (
        <div className="card-money-saved">
          <h2 className="card-title">Money Saved</h2>
          <span className="card-main-info">
            {currencyType} {moneySaved}
          </span>

          <div className="money-stats">
            <section className="money-stats-income">
              <FontAwesomeIcon icon={faArrowUp} className="arrow-up" />
              <div className="money-income">
                <span className="money-income-title">Income</span>
                <span className="money-income">
                  {currencyType} {income}
                </span>
              </div>
            </section>

            <section className="money-stats-spend">
              <FontAwesomeIcon icon={faArrowUp} className="arrow-down" />
              <div className="money-spend">
                <span className="money-spend-title">Spend</span>
                <span>
                  {currencyType} {spend}
                </span>
              </div>
            </section>
          </div>
        </div>
      )}
    </CardStyled>
  );
};

export default Card;
