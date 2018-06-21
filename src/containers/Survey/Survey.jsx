import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Toast } from 'antd-mobile';
import PageTitle from '../../components/Survey/PageTitle';
import CheckList from '../../components/Survey/CheckList';
import SubmitBtn from '../../components/Survey/SubmitBtn';

class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    const { userinfo } = this.props;
    const { college, className, gender, political } = userinfo;
    if (!college || !className || !gender || !political) {
      this.context.router.history.push('/');
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    let { answers, userinfo } = this.props;
    // 数据处理，提交数据库
    console.log(userinfo, answers);
    Toast.info('提交成功！', 1);
    this.context.router.history.push('/result');
  };
  render() {
    return (
      <div>
        <PageTitle title="新学期学生思想动态调查问卷" showSubTitle />
        <CheckList />
        <SubmitBtn handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  answers: state.answers,
  userinfo: state.userinfo
});

Survey.contextTypes = {
  router: PropTypes.object
};

export default connect(mapStateToProps)(Survey);
