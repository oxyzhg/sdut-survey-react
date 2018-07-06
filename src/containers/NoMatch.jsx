import React, { Component } from 'react';
import ResultPage from '../components/Survey/ResultPage';

class Home extends Component {
  render() {
    return (
      <ResultPage
        icon="cross-circle"
        iconColor="#ff461f"
        title="无法匹配问卷"
        message="请检查页面链接是否正确"
      />
    );
  }
}

export default Home;
