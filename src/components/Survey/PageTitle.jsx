import React from 'react';
import PropTypes from 'prop-types';
import { WingBlank } from 'antd-mobile';
import './Survey.css';

const CheckList = props => {
  return (
    <WingBlank>
      <div className="page__title">
        <h2>{props.title}</h2>
      </div>
    </WingBlank>
  );
};

CheckList.propTypes = {
  title: PropTypes.string
};

export default CheckList;
