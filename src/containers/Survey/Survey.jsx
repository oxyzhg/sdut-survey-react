import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Toast } from 'antd-mobile';
import { updateCatid } from '../../actions/survey_catid';
import { updateRowData } from '../../actions/survey_row_data';
import { updateSurveyAnswers } from '../../actions/survey_formback';
import PageDesc from '../../components/Survey/PageDesc';
import SurveyForm from '../../components/Survey/SurveyForm';
import SubmitBtn from '../../components/Survey/SubmitBtn';
import Loading from '../../components/Loading';

class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    const catid = this.props.match.params.catid;
    const { survey_row_data } = this.props;
    if (!survey_row_data.id || survey_row_data.id !== Number(catid)) {
      fetch(
        'https://www.easy-mock.com/mock/5b3f1948b679b37c24076fa0/api/survey'
      )
        .then(res => res.json())
        .then(data => {
          this.props.updateCatid(catid);
          this.props.updateRowData(data);
          this.setState({ loading: false });
          if (data.user_required) {
            this.context.router.history.push(`/prefs/${catid}`);
          }
        })
        .catch(err => console.log('错误:', err));
    } else {
      this.setState({ loading: false });
    }
  }
  isChecked = (type, num, val) => {
    let { survey_answers } = this.props.survey_formback;
    // 1单选 2复选
    if (type === '1') {
      return survey_answers[num] === val;
    } else if (type === '2') {
      if (!survey_answers[num]) {
        return false;
      } else {
        return survey_answers[num].indexOf(val) > -1;
      }
    }
  };
  handleChange = (type, num, val) => {
    let { survey_answers } = this.props.survey_formback;
    // 1单选 2复选
    if (type === '1') {
      survey_answers[num] = val;
    } else if (type === '2') {
      if (!survey_answers[num]) {
        survey_answers[num] = [];
        survey_answers[num].push(val);
      } else if (survey_answers[num].indexOf(val) === -1) {
        survey_answers[num].push(val);
      } else if (survey_answers[num].indexOf(val) >= 0) {
        // TODO: 限选3项
        survey_answers[num].splice(survey_answers[num].indexOf(val), 1);
      }
    } else if (type === '3') {
      survey_answers[num] = val;
    }
    this.props.updateSurveyAnswers(survey_answers);
  };
  handleSubmit = e => {
    e.preventDefault();
    let catid = this.props.match.params.catid;
    let { survey_row_data, survey_formback } = this.props;
    let { id, title, user_required, pre_fields, questions } = survey_row_data;
    let { field_answers, survey_answers } = survey_formback;
    // 数据处理，提交数据库
    if (user_required) {
      // 用户信息必填
      for (let i in field_answers) {
        if (field_answers[i] instanceof Array) {
          field_answers[i] = field_answers[i].join();
        }
      }
      let hasFieldEmpty = pre_fields.every(
        item => !field_answers[item.input_num]
      );
      if (hasFieldEmpty) {
        Toast.info('有没填的用户信息，跳转~', 1);
        console.log('有没填的用户信息，跳转');
        this.context.router.history.push(`/prefs/${catid}`);
      }
    }
    let hasSurveyEmpty = questions.filter(item => {
      if (item.input_type === '3') {
        return false;
      } else if (item.input_type === '2') {
        return (
          !survey_answers[item.input_num] ||
          !survey_answers[item.input_num].length
        );
      } else {
        return !!!survey_answers[item.input_num];
      }
    });
    if (hasSurveyEmpty.length) {
      Toast.info('还没有答完题喔~', 1);
    } else {
      // 可以提交了
      console.log(id, title, field_answers, survey_answers);
      // this.context.router.history.push(`/result/${catid}`);
    }
  };
  render() {
    let { loading } = this.state;
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <PageDesc description={this.props.survey_row_data.description} />
            <SurveyForm
              surveyList={this.props.survey_row_data.questions}
              surveyAnswers={this.props.survey_formback.survey_answers}
              isChecked={this.isChecked}
              handleChange={this.handleChange}
            />
            <SubmitBtn handleSubmit={this.handleSubmit} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  survey_catid: state.survey_catid,
  survey_row_data: state.survey_row_data,
  survey_formback: state.survey_formback
});

const mapDispatchToProps = dispatch => ({
  updateCatid: bindActionCreators(updateCatid, dispatch),
  updateRowData: bindActionCreators(updateRowData, dispatch),
  updateSurveyAnswers: bindActionCreators(updateSurveyAnswers, dispatch)
});

Survey.contextTypes = {
  router: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Survey);
