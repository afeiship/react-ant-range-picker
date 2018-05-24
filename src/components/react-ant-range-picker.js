import React,{ Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { DatePicker } from 'antd';
import 'next-return-event';

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

  _onChange = (inEvent) => {
    const {
      format,
      onChange
    } = this.props;

    if (inEvent.length > 0) {
      const start = inEvent[0].format(format);
      const end = inEvent[1].format(format);
      onChange(nx.returnEventTarget([start, end]));
    } else {
      onChange(nx.returnEventTarget(inEvent));
    }
  };


  render(){
    const { className, onChange,  ...props } = this.props;
    return (
      <DatePicker.RangePicker onChange={this._onChange} {...props} />
    );
  }
}
