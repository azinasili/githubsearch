import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Select from '../../components/select/Select';
import './Panel.css';

class Panel extends Component {
  render() {
    let selectValue = this.props.selectValue ? this.props.selectValue : this.props.selectOptions[0];

    return (
      <div className="Panel">
        <div className="Panel-header">
          <h2 className="Panel-title">Top {selectValue} {this.props.title}</h2>
          <Select
            selectValue={selectValue}
            selectOptions={this.props.selectOptions}
            handleSelect={this.props.handleSelect} />
        </div>
        <div className="Panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectOptions: state.selectOptions,
  };
}

Panel.propTypes = {
  title: PropTypes.string,
  handleSelect: PropTypes.func,
  selectValue: PropTypes.number,
};

export default connect(mapStateToProps)(Panel);
