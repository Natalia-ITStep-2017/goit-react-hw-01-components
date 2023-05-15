import PropTypes from "prop-types";
import css from "./stat.module.css";
import StatisticsItem from "./statItem";


const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && (
        <h2 className={css.title}>{title}</h2>
      )}
      <ul className={css.statList}>
        {stats.map((statItem) =>
          <StatisticsItem key={statItem.id} item={statItem} />
        )}
      </ul>
    </section>
  )
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired
  ).isRequired
};

export default Statistics;


