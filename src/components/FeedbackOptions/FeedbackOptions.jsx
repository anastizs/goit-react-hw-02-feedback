import PropTypes from "prop-types";
import { ControlsList, ButtonControl } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ControlsList>
    {options.map((option) => (
      <li key={option}>
        <ButtonControl type="button" onClick={() => onLeaveFeedback(option)}>
          {option}
        </ButtonControl>
      </li>
    ))}
  </ControlsList>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
