import React from 'react';
import PropTypes from 'prop-types';
import { List, InputItem, Picker } from 'antd-mobile';
import './Survey.css';

const BasicInfoForm = props => {
  return (
    <List renderHeader={() => '基本信息'} className="basic-info-form">
      <Picker
        data={props.collegeList}
        value={props.selectCollege}
        cols={1}
        onChange={val => props.handleChange('college', val)}
      >
        <List.Item arrow="horizontal">学院</List.Item>
      </Picker>
      <InputItem
        defaultValue={props.inputClassName}
        placeholder="请输入班级"
        clear
        onBlur={val => props.handleBlur(val)}
      >
        <div>班级</div>
      </InputItem>
      <Picker
        data={props.genderList}
        value={props.selectGender}
        cols={1}
        onChange={val => props.handleChange('gender', val)}
      >
        <List.Item arrow="horizontal">性别</List.Item>
      </Picker>
      <Picker
        data={props.politicalList}
        value={props.selectPolitical}
        cols={1}
        onChange={val => props.handleChange('political', val)}
      >
        <List.Item arrow="horizontal">政治面貌</List.Item>
      </Picker>
    </List>
  );
};

BasicInfoForm.propTypes = {
  collegeList: PropTypes.array.isRequired,
  genderList: PropTypes.array.isRequired,
  politicalList: PropTypes.array.isRequired,
  className: PropTypes.string,
  selectCollege: PropTypes.array,
  selectGender: PropTypes.array,
  selectPolitical: PropTypes.array,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired
};

export default BasicInfoForm;
