import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Toast } from 'antd-mobile';
import BasicLayout from '@/layouts/BasicLayout';
import PageTitle from '@/components/PageTitle';
import PrefsForm from '@/components/PrefsForm';
import SubmitBtn from '@/components/SubmitBtn';
import { updatePrefsAnswers } from '@/actions/surveyAnsws';

class Prefs extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    const { catid, preFields, rawData } = this.props.surveyData;
    if (catid !== Number(id) || !rawData.user_required || !preFields.length) {
      this.props.history.push(`/${catid}`);
    }
  }

  /**
   * @description 格式化用户验证问题选项
   * @returns
   */
  getFieldList = () => {
    const { preFields } = this.props.surveyData;
    if (preFields) {
      const fields = preFields.map(item => {
        let { input_num, input_title, input_type, input_options } = item;
        input_options = input_options.map(el => ({
          value: el.field_value,
          label: el.field_label
        }));
        return { input_num, input_title, input_type, input_options };
      });
      return fields;
    }
    return null;
  };

  /**
   * @description 表单项提交
   * @param {*} num 题号
   * @param {*} val 值
   */
  handleChange = (num, val) => {
    let { prefsAnswers } = this.props.surveyAnsws;
    prefsAnswers[num] = val;
    this.props.updatePrefsAnswers(prefsAnswers);
  };

  /**
   * @description 验证后跳转到问卷页面
   * @param {*} e
   */
  handleSubmit = e => {
    e.preventDefault();
    const { prefsAnswers } = this.props.surveyAnsws;
    const { catid } = this.props.surveyData;
    const fieldList = this.getFieldList();
    const hasEmpty = fieldList.filter(item => {
      if (item.input_type === '1') {
        return !prefsAnswers[item.input_num] || !prefsAnswers[item.input_num].length;
      } else {
        return !!!prefsAnswers[item.input_num];
      }
    });
    if (hasEmpty.length) {
      Toast.info('请填写完整', 1);
    } else {
      Toast.success('Success!', 1);
      this.props.history.push(`/${catid}`);
    }
    this.props.history.push(`/${catid}`);
  };

  render() {
    const { rawData } = this.props.surveyData;
    return (
      <BasicLayout history={this.props.history}>
        <PageTitle title={rawData.title} />
        <PrefsForm
          fieldList={this.getFieldList()}
          fieldAnswers={this.props.surveyAnsws.prefsAnswers}
          handleChange={this.handleChange}
        />
        <SubmitBtn handleSubmit={this.handleSubmit} />
      </BasicLayout>
    );
  }
}

const mapStateToProps = state => ({
  baseUrl: state.baseUrl,
  surveyData: state.surveyData,
  surveyAnsws: state.surveyAnsws
});

const mapDispatchToProps = dispatch => ({
  updatePrefsAnswers: bindActionCreators(updatePrefsAnswers, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Prefs);
