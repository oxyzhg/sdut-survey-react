import React from 'react';
import { WingBlank, Icon } from 'antd-mobile';

const Loading = props => {
  return (
    <WingBlank className="loading-data">
      <Icon type="loading" />
      <p>loading</p>
    </WingBlank>
  );
};

export default Loading;
