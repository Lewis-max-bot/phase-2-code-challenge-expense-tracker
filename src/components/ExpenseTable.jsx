function ExpenseTable({ expenses, onDelete, onSort }) {
    return (
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th onClick={() => onSort("description")}>Description ⬍</th>
            <th>Amount</th>
            <th onClick={() => onSort("category")}>Category ⬍</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td colSpan="4">No expenses found.</td>
            </tr>
          ) : (
            expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>${expense.amount}</td>
                <td>{expense.category}</td>
                <td>
                  <button onClick={() => onDelete(expense.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    );
  }
  
  export default ExpenseTable;
  