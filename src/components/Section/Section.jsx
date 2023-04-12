import PropTypes from "prop-types";
import { Container } from "./Section.styled";

const Section = ({ title, children }) => {
  return (
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
