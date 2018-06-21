import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List, TextareaItem } from 'antd-mobile';
import './Survey.css';
import { updateAnswer } from '../../actions/answers';
import CheckItem from './CheckItem';

class CheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  isChecked = (type, id, val) => {
    let { answers } = this.props;
    // 1单选 2复选
    if (type === 1) {
      return answers[id] === val;
    } else if (type === 2) {
      if (!answers[id]) {
        return false;
      } else {
        return answers[id].indexOf(val) > -1;
      }
    }
  };
  handleChange = (type, id, val) => {
    let { answers } = this.props;
    // 1单选 2复选
    if (type === 1) {
      answers[id] = val;
    } else if (type === 2) {
      if (!answers[id]) {
        answers[id] = [];
        answers[id].push(val);
      } else if (answers[id].indexOf(val) === -1) {
        answers[id].push(val);
      } else if (answers[id].indexOf(val) >= 0) {
        // TODO: 限选3项
        answers[id].splice(answers[id].indexOf(val), 1);
      }
    } else if (type === 3) {
      answers[id] = val;
    }
    this.props.updateAnswer(answers);
  };
  render() {
    return (
      <div style={{ textAlign: 'left' }}>
        {this.props.questions.map((item, index) => (
          <div key={item.id}>
            {item.type === 3 ? (
              <List renderHeader={`${item.id}.${item.question}`}>
                <TextareaItem
                  autoHeight
                  clear
                  placeholder="请输入留言..."
                  onBlur={val => this.handleChange(item.type, item.id, val)}
                />
              </List>
            ) : (
              <List renderHeader={`${item.id}.${item.question}`}>
                {item.answers.map(i => (
                  <CheckItem
                    key={i.value}
                    type={item.type}
                    id={item.id}
                    value={i.value}
                    label={i.label}
                    isChecked={this.isChecked}
                    handleChange={this.handleChange}
                  />
                ))}
              </List>
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
  answers: state.answers
});

const mapDispatchToProps = dispatch => ({
  updateAnswer: bindActionCreators(updateAnswer, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckList);
