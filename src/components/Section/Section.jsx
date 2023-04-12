import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
    return (
        <section>
            <h1>{title}</h1>
            {children}
        </section>
    );
};

Section.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};

export default Section;