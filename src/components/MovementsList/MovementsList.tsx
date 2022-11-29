import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { mockUser } from "../../Utils/mockBack";
import MovementsListStyled from "./MovementsListStyled";
import { ExpenseIncome } from "../../interfaces/interfaces";

interface MovemenstListProps {
  type: "Incomes" | "Expenses" | "Recent movements";
}

const user = mockUser;
const MovementsList = ({ type }: MovemenstListProps): JSX.Element => {
  let movements: ExpenseIncome[] = [];

  switch (type) {
    case "Incomes":
      movements = user.incomes;
      break;

    case "Expenses":
      movements = user.expenses;
      break;

    case "Recent movements":
      movements = [...user.incomes, ...user.expenses];
      break;

    default:
      break;
  }

  movements.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));

  const movementsList = movements.map((movement) => (
    <li
      key={movement.name + movement.date + movement.category}
      className="list-container__movement"
    >
      <img
        width={35}
        src={movement.category.icon}
        alt={`Category icon of ${movement.category}`}
      />
      <div className="movement-data">
        <span className="movement-data__name">
          {type === "Recent movements" ? movement.category.name : movement.name}
        </span>
        <span className="movement-data__date">{movement.date}</span>
      </div>

      {movement.category.name === "Income" ? (
        <span className="movement-quantity">{`${movement.quantity} ${user.currency}`}</span>
      ) : (
        <span className="movement-quantity movement-quantity--expense">{`- ${movement.quantity} ${user.currency}`}</span>
      )}

      <FontAwesomeIcon
        icon={faChevronRight}
        height={25}
        className="movement__icon"
      />
    </li>
  ));

  return (
    <MovementsListStyled>
      <h3 className="movements-list__title">
        {type === "Recent movements" ? type : ""}
      </h3>
      <ul className="list-container">{movementsList}</ul>
    </MovementsListStyled>
  );
};

export default MovementsList;
