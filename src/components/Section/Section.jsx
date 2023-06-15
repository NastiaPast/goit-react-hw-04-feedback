import PropTypes from 'prop-types';
import { Sections, Title } from './Section.styled';
const Section = ({ title, children }) => {
  return (
    <Sections>
      <Title>{title}</Title>
      {children}
    </Sections>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
export default Section;
