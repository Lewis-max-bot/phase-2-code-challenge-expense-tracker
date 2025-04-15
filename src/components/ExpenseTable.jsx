import React from "react";

function ExpenseTable({ expenses }) {
  return (
    <table border="1" style={{ width: "100%", marginTop: "20px" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.name}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>{expense.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
