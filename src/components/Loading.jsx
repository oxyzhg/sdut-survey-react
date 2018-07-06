import React from 'react';
import { WingBlank, Icon } from 'antd-mobile';

const Loading = props => {
  return (
    <WingBlank style={{ paddingTop: '100px' }}>
      <Icon type="loading" />
      <p>Loading...</p>
    </WingBlank>
  );
};

export default Loading;
