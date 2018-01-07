import React from 'react';
import PropTypes from 'prop-types';
import './Select.css';

function Select(props) {
  return (
    <label className="Select">
      <span className="Select-label">Show:</span>
      <select className="Select-input" value={props.selectValue} onChange={props.handleSelect}>
        {
          props.selectOptions.map((option) => {
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

Select.propTypes = {
  selectValue: PropTypes.number,
  selectOptions: PropTypes.array,
  handleSelect: PropTypes.func,
};

export default Select;
