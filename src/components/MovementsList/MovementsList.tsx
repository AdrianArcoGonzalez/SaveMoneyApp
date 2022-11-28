import { mockUser } from "../../Utils/mockBack";

const user = mockUser;
const MovementsList = (): JSX.Element => {
  const movements = [...user.incomes, ...user.expenses];

  movements.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));

  const movementsList = movements.map((movement) => (
    <li key={movement.name + movement.date + movement.category}>
      <img
        width={24}
        src={movement.icon}
        alt={`Category icon of ${movement.category}`}
      />
      <div>
        <span>{movement.name}</span>
        <span>{movement.date}</span>
      </div>

      {movement.category === "Income" ? (
        <span>{`${movement.quantity} ${user.currency}`}</span>
      ) : (
        <span className="expense">{`- ${movement.quantity} ${user.currency}`}</span>
      )}
      <button>{">"}</button>
    </li>
  ));

  return (
    <div>
      <h3>Recent movements</h3>
      {movementsList}
    </div>
  );
};

export default MovementsList;
