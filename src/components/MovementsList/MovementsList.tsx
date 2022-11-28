import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { mockUser } from "../../Utils/mockBack";
import MovementsListStyled from "./MovementsListStyled";

const user = mockUser;
const MovementsList = (): JSX.Element => {
  const movements = [...user.incomes, ...user.expenses];

  movements.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));

  const movementsList = movements.map((movement) => (
    <li
      key={movement.name + movement.date + movement.category}
      className="list-container__movement"
    >
      <img
        width={35}
        src={movement.icon}
        alt={`Category icon of ${movement.category}`}
      />
      <div className="movement-data">
        <span className="movement-data__name">{movement.category}</span>
        <span className="movement-data__date">{movement.date}</span>
      </div>

      {movement.category === "Income" ? (
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
      <h3 className="movements-list__title">Recent movements</h3>
      <ul className="list-container">{movementsList}</ul>
    </MovementsListStyled>
  );
};

export default MovementsList;
