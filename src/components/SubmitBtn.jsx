import React from 'react';
import PropTypes from 'prop-types';
import { WingBlank, Button } from 'antd-mobile';

const SubmitBtn = props => {
  return (
    <WingBlank className="submit-btn">
      <Button type="primary" onClick={props.handleSubmit}>
        提交
      </Button>
    </WingBlank>
  );
};

SubmitBtn.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default SubmitBtn;
