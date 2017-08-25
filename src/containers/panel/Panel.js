import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from '../../components/select/Select';
import './Panel.css';

class Panel extends Component {
  render() {
    let selectValue = this.props.selectValue ? this.props.selectValue : this.props.selectOptions[0];

    const CLASSES = classNames({
      'Panel': true,
      'Panel--active': this.props.active,
    });

    return (
      <div className={CLASSES}>
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
  active: PropTypes.bool,
  title: PropTypes.string,
  handleSelect: PropTypes.func,
  selectValue: PropTypes.number,
};

export default connect(mapStateToProps)(Panel);
