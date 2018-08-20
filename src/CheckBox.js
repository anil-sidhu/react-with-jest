import React from 'react';

export default class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isChecked: false};

    // bind manually because React class components don't auto-bind
    // http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    
  }

  onChange() {

    this.setState(prevState => ({isChecked: !prevState.isChecked}));
  }
  onClick() {
    console.warn("check click new ")

    this.setState(prevState => ({isChecked: !prevState.isChecked}));
  }
  render() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onClick={this.onClick}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
}