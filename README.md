# react-ant-range-picker
> React ant range picker.


## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    format: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    format: 'YYYY-MM-DD',
    onChange: noop,
  };
  
```

## usage:
```jsx

// install: npm install afeiship/react-ant-range-picker --save
// import : import ReactAntRangePicker from 'react-ant-range-picker'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = e => {
    console.log(e);
  };

  render(){
    return (
      <div className="hello-react-ant-range-picker">
        <ReactAntRangePicker onChange={this._onChange} ref='rc' />
    </div>
    );
  }
}

```

## customize style:
```scss
// customize your exception styles:
$react-ant-range-picker-options:(
);

@import '~node_modules/react-ant-range-picker/style.scss';
```
