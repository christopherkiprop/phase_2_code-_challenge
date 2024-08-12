import React from "react";
import Transaction from "./Transaction";

function TransactionsList() {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* Map through the transactions array and render a Transaction component for each item */}
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id} // Unique key for each transaction, required by React
            date={transaction.date} // Pass the transaction date as a prop
            description={transaction.description} // Pass the transaction description as a prop
            category={transaction.category} // Pass the transaction category as a prop
            amount={transaction.amount} // Pass the transaction amount as a prop
          />
        {/* render a list of <Transaction> components here */}
      </tbody>
    </table>
  );
}

export default TransactionsList;
