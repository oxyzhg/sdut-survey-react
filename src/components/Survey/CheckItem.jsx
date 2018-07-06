import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd-mobile';
import './Survey.css';

const { CheckboxItem } = Checkbox;

const CheckItem = props => {
  return (
    <CheckboxItem
      checked={props.isChecked(props.type, props.num, props.value)}
      onChange={() => props.handleChange(props.type, props.num, props.value)}
    >
      {props.label}
    </CheckboxItem>
  );
};

CheckItem.propTypes = {
  type: PropTypes.string.isRequired,
  num: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default CheckItem;
