import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd-mobile';
import './Survey.css';

const { CheckboxItem } = Checkbox;

const CheckItem = ({ type, id, value, label, isChecked, handleChange }) => {
  return (
    <CheckboxItem
      checked={isChecked(type, id, value)}
      onChange={() => handleChange(type, id, value)}
    >
      {label}
    </CheckboxItem>
  );
};

CheckItem.propTypes = {
  type: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default CheckItem;
