import './dev.scss';
import ReactAntRangePicker from './main';

/*===example start===*/

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
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
