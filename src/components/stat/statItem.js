import PropTypes from "prop-types";
import css from "./stat.module.css";

const StatisticsItem = ({ item }) => {
  const { label, percentage } = item;
  return (<li className={css.item}>
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}%</span>
  </li>)
}

StatisticsItem.propTypes = {
  item: PropTypes.PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }).isRequired,
};


export default StatisticsItem;


