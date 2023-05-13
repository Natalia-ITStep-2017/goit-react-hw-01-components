import PropTypes from "prop-types";
import css from "./transactions.module.css";

const TransactionItem = ({ item }) => {
  const { type, amount, currency } = item
  return (
    <tr className={css.transactionItem}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  )
};

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.transactionHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) =>
          <TransactionItem key={transaction.id} item={transaction} />
        )}
      </tbody>
    </table>
  )
}

TransactionItem.propTypes = {
  item: PropTypes.object.isRequired,
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TransactionHistory;