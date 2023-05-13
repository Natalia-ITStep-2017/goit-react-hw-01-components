import PropTypes from "prop-types";
import clsx from "clsx";
import css from "./stat.module.css";

const StatisticsItem = ({ item }) => {
  const { label, percentage } = item;
  return (<li className={css.item}>
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}%</span>
  </li>)
}

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={clsx(title ? css.title : css.nonTitle)}>{title}</h2>
      <ul className={css.statList}>
        {stats.map((statItem) =>
          <StatisticsItem key={statItem.id} item={statItem} />
        )}
      </ul>
    </section>
  )
};

StatisticsItem.propTypes = {
  item: PropTypes.object.isRequired,
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;


