import React from 'react';
import PropTypes from 'prop-types';
import { WingBlank, Button } from 'antd-mobile';

const CheckList = props => {
  return (
    <WingBlank style={{ marginTop: '40px', marginBottom: '40px' }}>
      <Button type="primary" onClick={props.handleSubmit}>
        提交
      </Button>
    </WingBlank>
  );
};

CheckList.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default CheckList;
