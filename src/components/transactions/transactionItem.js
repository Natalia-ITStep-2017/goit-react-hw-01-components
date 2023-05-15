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


TransactionItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  }).isRequired
};

export default TransactionItem;