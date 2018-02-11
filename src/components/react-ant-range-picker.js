import React,{ Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { DatePicker } from 'antd';

export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    format: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    format: 'YYYY-MM-DD',
    onChange: noop,
  };
  /*===properties end===*/

  _onChange = (e) => {
    const {
      format,
      onChange
    } = this.props;

    if (e.length > 0) {
      const start = e[0].format(format);
      const end = e[1].format(format);
      onChange([start, end]);
    } else {
      onChange(e);
    }
  };


  render(){
    const { className, onChange,  ...props } = this.props;
    return (
      <DatePicker.RangePicker onChange={this._onChange} {...props} />
    );
  }
}
