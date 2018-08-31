import React, { Component } from 'react';
import BasicLayout from '@/layouts/BasicLayout';
import ResultPage from '@/components/ResultPage';

class Finish extends Component {
  state = {
    icon: 'cross-circle',
    iconColor: '#f13642',
    title: '页面错误',
    message: '请检查您的操作是否正确'
  };
  componentDidMount() {
    console.log(this.props.history.location.query);
    const { query } = this.props.history.location;
    if (query) {
      switch (query.key) {
        case 1:
          this.setState({
            icon: 'check-circle',
            iconColor: '#1aad16',
            title: '提交成功',
            message: '非常感谢您的参与'
          });
          break;
        case 2:
          this.setState({
            icon: 'cross-circle',
            iconColor: '#008aff',
            title: '未开放',
            message: '此问卷现在不在开放时间段'
          });
          break;
        default:
          return;
      }
    }
  }

  render() {
    const { icon, iconColor, title, message } = this.state;
    return (
      <BasicLayout history={this.props.history}>
        <ResultPage icon={icon} iconColor={iconColor} title={title} message={message} />;
        {/* <ResultPage icon="check-circle" title="提交成功" message="感谢您的参与" />; */}
      </BasicLayout>
    );
  }
}

export default Finish;
