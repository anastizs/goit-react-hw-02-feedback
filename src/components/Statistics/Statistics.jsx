import PropTypes from "prop-types";
import { StatisticsList, Span } from "./Statistics.styled";

const Statistics = ({ good, neutral, bad, positivePercentage, total }) => {
  return (
    <StatisticsList>
      <li>
        Good: <Span>{good}</Span>
      </li>
      <li>
        Neutral: <Span>{neutral}</Span>
      </li>
      <li>
        Bad: <Span>{bad}</Span>
      </li>
      <li>
        Total: <Span>{total}</Span>
      </li>
      <li>
        Positive feedback: <Span>{positivePercentage}%</Span>
      </li>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
export default Statistics;
