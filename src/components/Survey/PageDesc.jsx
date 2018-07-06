import React from 'react';
import PropTypes from 'prop-types';
import { WingBlank } from 'antd-mobile';
import './Survey.css';

const CheckList = props => {
  return (
    <WingBlank>
      <div className="page__desc">
        <p>{props.description}</p>
      </div>
    </WingBlank>
  );
};

CheckList.propTypes = {
  description: PropTypes.string
};

export default CheckList;
