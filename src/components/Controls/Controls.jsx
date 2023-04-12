import PropTypes from "prop-types";
import { ControlsList, ButtonControl } from "./Controls.styled";

const ControlsBtn = ({ options, onLeaveFeedback }) => (
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

ControlsBtn.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ControlsBtn;
