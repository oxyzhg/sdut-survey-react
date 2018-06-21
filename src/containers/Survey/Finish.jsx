import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Result, Icon } from 'antd-mobile';

class Finish extends Component {
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
  render() {
    return (
      <Result
        img={
          <Icon type="check-circle" size="lg" color="#008aff" className="spe" />
        }
        title="提交成功"
        message="感谢您的参与"
      />
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
