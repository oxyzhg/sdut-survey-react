import React from 'react';
import PropTypes from 'prop-types';
import { List, TextareaItem } from 'antd-mobile';
import CheckItem from './CheckItem';

const SurveyForm = props => {
  const renderTitle = (num, title, type) => {
    // const desc = type === 1 ? '单选' : '多选，限选三项';
    let desc;
    switch (type) {
      case 1:
        desc = '单选';
        break;
      case 2:
        desc = '多选，限选三项';
        break;
      case 3:
        desc = '填空';
        break;
      default:
        desc = '';
    }
    return (
      <span>
        {num}. {title} [{desc}]
      </span>
    );
  };

  return (
    <div style={{ textAlign: 'left' }}>
      {props.surveyList &&
        props.surveyList.map(item => (
          <div key={item.id}>
            {item.input_type === 3 ? (
              <List renderHeader={renderTitle(item.input_num, item.input_title, item.input_type)}>
                <TextareaItem
                  autoHeight
                  clear
                  placeholder="请输入..."
                  onBlur={val => props.handleChange(item.input_type, item.input_num, val)}
                />
              </List>
            ) : (
              <List renderHeader={renderTitle(item.input_num, item.input_title, item.input_type)}>
                {item.options &&
                  item.options.map(el => (
                    <CheckItem
                      key={el.field_value}
                      value={el.field_value}
                      label={el.field_label}
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
