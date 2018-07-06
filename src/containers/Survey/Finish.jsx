import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ResultPage from '../../components/Survey/ResultPage';

class Finish extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ResultPage icon="cross-circle" title="提交成功" message="感谢您的参与" />
    );
  }
}

const mapStateToProps = state => ({
  answers: state.answers,
  userinfo: state.userinfo
});

Finish.contextTypes = {
  router: PropTypes.object
};

export default connect(mapStateToProps)(Finish);
