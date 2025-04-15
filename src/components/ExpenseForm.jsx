import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    category: "",
    description: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newExpense = { ...formData, id: Date.now() };
    onAddExpense(newExpense);
    setFormData({ name: "", amount: "", category: "", description: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} />
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
