import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import MovementsListStyled from "./MovementsListStyled";
import { ExpenseIncome, MovementsType } from "../../interfaces/interfaces";
import { useContext, useState } from "react";
import UserContext from "../../store/UserContext/UserContext";
import {
  getTotalExpensesByCategory,
  getTotalIncomes,
} from "../../Utils/operationsUtils";
import { expensesCategoriesList } from "../../Utils/categories";
import { useMovements } from "../../hooks/useMovements/useMovements";
import { UpdateIncome } from "../UpdateIncome/UpdateIncome";
import { UpdateExpense } from "../UpdateExpense/UpdateExpense";

interface MovemenstListProps {
  type: MovementsType;
}

const MovementsList = ({ type }: MovemenstListProps): JSX.Element => {
  const { user } = useContext(UserContext);
  const { deleteMovement } = useMovements();
  const [updateForm, setUpdateForm] = useState("");

  let movements: ExpenseIncome[] = [];

  switch (type) {
    case "Incomes":
      movements = user.incomes;
      movements.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
      break;

    case "Expenses":
      movements = user.expenses;
      movements.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
      break;

    case "Recent movements":
      const incomes = [
        {
          category: user.incomes[0].category,
          date: "",
          name: "",
          quantity: getTotalIncomes(user.incomes),
          id: "totalincomes",
        },
      ];

      const expenses = expensesCategoriesList()
        .map((category) => getTotalExpensesByCategory(user.expenses, category))
        .filter((expense) => expense.quantity > 0);

      movements = [...incomes, ...expenses];
      break;

    default:
      break;
  }

  const movementsList = movements.map((movement) => (
    <>
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
            {type === "Recent movements"
              ? movement.category.name
              : movement.name}
          </span>
          {type !== "Recent movements" && (
            <span className="movement-data__date">{movement.date}</span>
          )}
        </div>

        {movement.category.name === "Incomes" ? (
          <span className="movement-quantity">{`${movement.quantity} ${user.currency}`}</span>
        ) : (
          <span className="movement-quantity movement-quantity--expense">{`- ${movement.quantity} ${user.currency}`}</span>
        )}

        {type !== "Recent movements" && (
          <div className="movements-list__buttons">
            <button
              className="clear"
              onClick={() => deleteMovement(movement.name, type)}
            >
              <FontAwesomeIcon
                icon={faTrash}
                height={25}
                className="movement__icon"
              />
            </button>

            <button
              className="clear"
              onClick={() => {
                setUpdateForm(movement.id);
              }}
            >
              <FontAwesomeIcon
                icon={faPencil}
                height={25}
                className="movement__icon"
              />
            </button>
          </div>
        )}

        {/* <FontAwesomeIcon
          icon={faChevronRight}
          height={25}
          className="movement__icon"
        /> */}
      </li>
      {movement.id === updateForm && (
        <>
          {type === "Expenses" ? (
            <UpdateExpense movement={movement} closeForm={setUpdateForm} />
          ) : (
            <UpdateIncome movement={movement} closeForm={setUpdateForm} />
          )}
        </>
      )}
    </>
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
