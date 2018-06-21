import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Toast } from 'antd-mobile';
import { updateUserinfo } from '../../actions/userinfo';
import PageTitle from '../../components/Survey/PageTitle';
import BasicInfoForm from '../../components/Survey/BasicInfoForm';
import SubmitBtn from '../../components/Survey/SubmitBtn';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderList: [
        {
          label: '男',
          value: '男'
        },
        {
          label: '女',
          value: '女'
        }
      ],
      politicalList: [
        {
          label: '群众',
          value: '群众'
        },
        {
          label: '共青团员',
          value: '共青团员'
        },
        {
          label: '中共预备党员',
          value: '中共预备党员'
        },
        {
          label: '中共党员',
          value: '中共党员'
        }
      ],
      collegeList: [
        {
          label: '机械工程学院',
          value: '机械工程学院'
        },
        {
          label: '交通与车辆工程学院',
          value: '交通与车辆工程学院'
        },
        {
          label: '农业工程与食品科学学院',
          value: '农业工程与食品科学学院'
        },
        {
          label: '电气与电子工程学院',
          value: '电气与电子工程学院'
        },
        {
          label: '计算机科学与技术学院',
          value: '计算机科学与技术学院'
        },
        {
          label: '化学化工学院',
          value: '化学化工学院'
        },
        {
          label: '建筑工程学院',
          value: '建筑工程学院'
        },
        {
          label: '资源与环境工程学院',
          value: '资源与环境工程学院'
        },
        {
          label: '材料科学与工程学院',
          value: '材料科学与工程学院'
        },
        {
          label: '生命科学学院',
          value: '生命科学学院'
        },
        {
          label: '数学与统计学院',
          value: '数学与统计学院'
        },
        {
          label: '物理与光电工程学院',
          value: '物理与光电工程学院'
        },
        {
          label: '经济学院',
          value: '经济学院'
        },
        {
          label: '管理学院',
          value: '管理学院'
        },
        {
          label: '文学与新闻传播学院',
          value: '文学与新闻传播学院'
        },
        {
          label: '外国语学院',
          value: '外国语学院'
        },
        {
          label: '法学院',
          value: '法学院'
        },
        {
          label: '马克思主义学院',
          value: '马克思主义学院'
        },
        {
          label: '美术学院',
          value: '美术学院'
        },
        {
          label: '音乐学院',
          value: '音乐学院'
        },
        {
          label: '体育学院',
          value: '体育学院'
        },
        {
          label: '国防教育学院',
          value: '国防教育学院'
        },
        {
          label: '鲁泰纺织服装学院',
          value: '鲁泰纺织服装学院'
        }
      ],
      selectGender: [],
      selectPolitical: [],
      selectCollege: [],
      inputClassName: ''
    };
    this.handleChange.bind(this);
  }
  handleClick = () => {
    fetch(' https://www.easy-mock.com/mock/5b28e40ae0859d132780ff55/api/all')
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(e => console.log('错误:', e));
  };
  handleChange = (picker, val) => {
    let { userinfo } = this.props;
    userinfo[picker] = val;
    this.props.updateUserinfo(userinfo);
  };
  handleBlur = val => {
    let { userinfo } = this.props;
    userinfo['className'] = val.trim();
    this.props.updateUserinfo(userinfo);
  };
  handleSubmit = e => {
    e.preventDefault();
    let { userinfo } = this.props;
    let college = userinfo.college[0];
    let className = userinfo.className.trim();
    let gender = userinfo.gender[0];
    let political = userinfo.political[0];

    if (!college) {
      Toast.info('请选择学院~', 1);
    } else if (!className) {
      Toast.info('请填写班级~', 1);
    } else if (!gender) {
      Toast.info('请选择性别~', 1);
    } else if (!political) {
      Toast.info('请选择政治面貌~', 1);
    } else {
      Toast.success('NICE!', 1);
      this.context.router.history.push('/survey');
    }
    // this.context.router.history.push('/survey');
  };
  render() {
    return (
      <div>
        <PageTitle title="新学期学生思想动态调查问卷" showTitle />
        <BasicInfoForm
          collegeList={this.state.collegeList}
          genderList={this.state.genderList}
          politicalList={this.state.politicalList}
          inputClassName={this.props.userinfo.className}
          selectCollege={this.props.userinfo.college}
          selectGender={this.props.userinfo.gender}
          selectPolitical={this.props.userinfo.political}
          handleChange={this.handleChange}
          handleBlur={this.handleBlur}
        />
        <SubmitBtn handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userinfo: state.userinfo
});

const mapDispatchToProps = dispatch => ({
  updateUserinfo: bindActionCreators(updateUserinfo, dispatch)
});

Home.contextTypes = {
  router: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
