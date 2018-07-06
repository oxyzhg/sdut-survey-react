import React from 'react';
import PropTypes from 'prop-types';
import { List, TextareaItem } from 'antd-mobile';
import './Survey.css';
import CheckItem from './CheckItem';

const SurveyForm = props => {
  return (
    <div style={{ textAlign: 'left' }}>
      {props.surveyList &&
        props.surveyList.map((item, index) => (
          <div key={item.id}>
            {item.input_type === '3' ? (
              <List renderHeader={`${item.input_num}.${item.input_title}`}>
                <TextareaItem
                  autoHeight
                  clear
                  placeholder="请输入留言..."
                  onBlur={val =>
                    props.handleChange(item.input_type, item.input_num, val)
                  }
                />
              </List>
            ) : (
              <List renderHeader={`${item.input_num}.${item.input_title}`}>
                {item.input_options &&
                  item.input_options.map(i => (
                    <CheckItem
                      key={i.field_value}
                      value={i.field_value}
                      label={i.field_label}
                      type={item.input_type}
                      num={item.input_num}
                      isChecked={props.isChecked}
                      handleChange={props.handleChange}
                    />
                  ))}
              </List>
            )}
          </div>
        ))}
    </div>
  );
};

SurveyForm.propTypes = {
  surveyList: PropTypes.array,
  surveyAnswers: PropTypes.object,
  handleChange: PropTypes.func.isRequired
};

export default SurveyForm;
