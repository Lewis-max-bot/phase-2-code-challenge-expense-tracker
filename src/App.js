import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleAddExpense(newExpense) {
    setExpenses([...expenses, newExpense]);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} /> 
      <ExpenseTable expenses={filteredExpenses} /> 
      <ExpenseForm onAddExpense={handleAddExpense} />
       
      
    </div>
  );
}

export default App;
