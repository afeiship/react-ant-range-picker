import React,{ Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { DatePicker } from 'antd';
import { returnEventTarget } from 'next-return-event';

export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    format: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    format: 'YYYY-MM-DD',
    onChange: noop,
  };
  /*===properties end===*/

  _onChange = (inEvent) => {
    const {
      onChange
    } = this.props;

    onChange(returnEventTarget(inEvent));
  };


  render(){
    const { onChange,  ...props } = this.props;
    return (
      <DatePicker.RangePicker onChange={this._onChange} {...props} />
    );
  }
}
