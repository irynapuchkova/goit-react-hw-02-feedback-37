import PropTypes from 'prop-types';
import { SectionSet } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionSet>
      {title}
      {children}
    </SectionSet>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
