import React from 'react';
import PropTypes from 'prop-types';
import { Result, Icon } from 'antd-mobile';

const ResultPage = props => {
  return (
    <Result
      img={
        <Icon
          type={props.icon || 'check-circle'}
          color={props.iconColor || '#008aff'}
          size="lg"
          className="spe"
        />
      }
      title={props.title}
      message={props.message}
    />
  );
};

ResultPage.propTypes = {
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default ResultPage;
