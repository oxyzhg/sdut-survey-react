import React from 'react';
import PropTypes from 'prop-types';
import { WingBlank } from 'antd-mobile';
import './Survey.css';

const CheckList = ({ title, showTitle, showSubTitle }) => {
  return (
    <WingBlank>
      {showTitle && (
        <div className="page__title">
          <h2>{title}</h2>
        </div>
      )}

      {showSubTitle && (
        <div className="page__desc">
          <p>亲爱的同学：</p>
          <p>你好！</p>
          <p>
            为了解我校学生开学初思想动态情况，我们设计了此调查问卷，请认真填写此问卷。此次调查为不记名方式，我们将对调查数据完全保密，并且不做任何商业用途，希望能够了解到你的真实想法。本次调研，除特殊说明的问题外均为单选，谢谢你的支持与合作!{' '}
          </p>
        </div>
      )}
    </WingBlank>
  );
};

CheckList.propTypes = {
  title: PropTypes.string.isRequired,
  showTitle: PropTypes.bool,
  showSubTitle: PropTypes.bool
};

export default CheckList;
