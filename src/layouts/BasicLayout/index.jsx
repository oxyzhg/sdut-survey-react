import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class BasicLayout extends Component {
  getCurrentYear = () => {
    return new Date().getFullYear();
  };
  render() {
    return (
      <div className="page__layout">
        <div className="page__hd" />
        <div className="page__bd">{this.props.children}</div>
        <div className="page__ft">
          <span>© {this.getCurrentYear()} 青春在线网站 版权所有</span>
        </div>
      </div>
    );
  }
}

BasicLayout.propTypes = {};

export default BasicLayout;
