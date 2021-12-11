import PropTypes from 'prop-types';
import styled from './Section.styled';

export default function Notification({ message }) {
  console.log(message);
  return <p>{message}</p>;
}
