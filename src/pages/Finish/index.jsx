import React, { Component } from 'react';
import BasicLayout from '@/layouts/BasicLayout';
import ResultPage from '@/components/ResultPage';

class Finish extends Component {
  componentDidMount() {
    // console.log(this.props)
  }

  render() {
    return (
      <BasicLayout history={this.props.history}>
        <ResultPage icon="check-circle" title="提交成功" message="感谢您的参与" />;
      </BasicLayout>
    );
  }
}

export default Finish;
