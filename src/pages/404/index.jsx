import React, { Component } from 'react';
import BasicLayout from '@/layouts/BasicLayout';
import ResultPage from '@/components/ResultPage';

class NotMatch extends Component {
  render() {
    return (
      <BasicLayout history={this.props.history}>
        <ResultPage
          icon="close-circle-o"
          iconColor="#f13642"
          title="无法匹配问卷"
          message="请检查链接是否正确"
        />
      </BasicLayout>
    );
  }
}

export default NotMatch;
