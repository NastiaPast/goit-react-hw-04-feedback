import PropTypes from 'prop-types';
import { Text } from './Notification.styled';
export const Notification = ({ message }) => {
  return <Text>{message}</Text>;
};
export default Notification;
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
