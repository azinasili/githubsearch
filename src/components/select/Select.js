import React, { Component } from 'react';
import './Select.css';

class Select extends Component {
  render() {
    return (
      <label className="Select">
        <span className="Select-label">Show:</span>
        <select className="Select-input" value={this.props.selectValue} onChange={this.props.handleSelect}>
          {
            this.props.selectOptions.map((option) => {
              return (
                <option
                  className="Select-option"
                  key={option}
                  value={option}>{option}</option>
              );
            })
          }
        </select>
      </label>
    );
  }
}

export default Select;
