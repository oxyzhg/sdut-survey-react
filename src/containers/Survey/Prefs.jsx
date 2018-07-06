import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Toast } from 'antd-mobile';
import { updateCatid } from '../../actions/survey_catid';
import { updateRowData } from '../../actions/survey_row_data';
import { updatePreFieldAnswers } from '../../actions/survey_formback';
import PageTitle from '../../components/Survey/PageTitle';
import PreFieldForm from '../../components/Survey/PreFieldForm';
import SubmitBtn from '../../components/Survey/SubmitBtn';

class PreFields extends Component {
  componentDidMount() {
    const catid = this.props.match.params.catid;
    const { survey_row_data } = this.props;
    if (!Object.getOwnPropertyNames(survey_row_data).length) {
      this.context.router.history.push(`/survey/${catid}`);
    }
  }
  getFieldList = () => {
    let { pre_fields } = this.props.survey_row_data;
    if (pre_fields) {
      let fields = pre_fields.map(item => {
        let { input_num, input_title, input_type, input_options } = item;
        input_options = input_options.map(v => {
          let { field_label: label, field_value: value } = v;
          return { label, value };
        });
        return { input_num, input_title, input_type, input_options };
      });
      return fields;
    } else {
      return null;
    }
  };
  handleChange = (type, val) => {
    let { field_answers } = this.props.survey_formback;
    field_answers[type] = val;
    this.props.updatePreFieldAnswers(field_answers);
  };
  handleSubmit = e => {
    e.preventDefault();
    let { field_answers } = this.props.survey_formback;
    let field_list = this.getFieldList();
    let hasEmpty = field_list.filter(item => {
      if (item.input_type === '1') {
        return (
          !field_answers[item.input_num] ||
          !field_answers[item.input_num].length
        );
      } else {
        return !!!field_answers[item.input_num];
      }
    });

    if (hasEmpty.length) {
      Toast.info('请填写完整~', 1);
    } else {
      Toast.success('NICE!', 1);
      this.context.router.history.push(`/survey/${this.props.survey_catid}`);
    }
    this.context.router.history.push(`/survey/${this.props.survey_catid}`);
  };
  render() {
    return (
      <div>
        <PageTitle title={this.props.survey_row_data.title} />
        <PreFieldForm
          fieldList={this.getFieldList()}
          fieldAnswers={this.props.survey_formback.field_answers}
          handleChange={this.handleChange}
        />
        <SubmitBtn handleSubmit={this.handleSubmit} />
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
  updatePreFieldAnswers: bindActionCreators(updatePreFieldAnswers, dispatch)
});

PreFields.contextTypes = {
  router: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreFields);
