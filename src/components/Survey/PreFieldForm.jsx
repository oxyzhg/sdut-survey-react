import React from 'react';
import PropTypes from 'prop-types';
import { List, InputItem, Picker } from 'antd-mobile';
import './Survey.css';

const PreFieldForm = props => {
  return (
    <List renderHeader={() => '基本信息'} className="pre-fields-form">
      {props.fieldList &&
        props.fieldList.map(item => (
          <div key={item.input_num}>
            {item.input_type === '1' ? (
              <Picker
                data={item.input_options}
                value={props.fieldAnswers[item.input_num]}
                cols={1}
                onChange={val => props.handleChange(item.input_num, val)}
              >
                <List.Item arrow="horizontal">{item.input_title}</List.Item>
              </Picker>
            ) : (
              <InputItem
                defaultValue={props.fieldAnswers[item.input_num]}
                placeholder={`请输入${item.input_title}`}
                clear
                onBlur={val => props.handleChange(item.input_num, val)}
              >
                <div>{item.input_title}</div>
              </InputItem>
            )}
          </div>
        ))}
    </List>
  );
};

PreFieldForm.propTypes = {
  fieldList: PropTypes.array,
  fieldAnswers: PropTypes.object,
  handleChange: PropTypes.func.isRequired
};

export default PreFieldForm;
