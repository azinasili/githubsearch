import React, { Component } from 'react';
import Select from '../../components/select/Select.js';
import './Panel.css';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      selectValue: null,
      selectOptions: [10, 20, 30],
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event) {
    this.setState({selectValue: event.target.value});
  }

  render() {
    let selectValue = this.state.selectValue ? this.state.selectValue : this.state.selectOptions[0];

    return (
      <div className="Panel">
        <div className="Panel-header">
          <h2 className="Panel-title">Top {selectValue} {this.state.title}</h2>
          <form className="Panel-switcher">
            <Select
              selectValue={this.state.selectValue}
              selectOptions={this.state.selectOptions}
              handleSelect={this.handleSelect} />
          </form>
        </div>
        <div className="Panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Panel;
