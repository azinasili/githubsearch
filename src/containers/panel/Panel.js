import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from '../../components/select/Select';
import './Panel.css';

function mapStateToProps(state) {
  return {
    selectOptions: state.selectOptions,
  };
}

function Panel(props) {
  let selectValue = props.selectValue ? props.selectValue : props.selectOptions[0];

  const CLASSES = classNames({
    'Panel': true,
    'Panel--active': props.active,
  });

  return (
    <div className={CLASSES}>
      <div className="Panel-header">
        <h2 className="Panel-title">Top {selectValue} {props.title}</h2>
        <Select
          selectValue={selectValue}
          selectOptions={props.selectOptions}
          handleSelect={props.handleSelect} />
      </div>
      <div className="Panel-body">
        {props.children}
      </div>
    </div>
  );
}

Panel.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string,
  handleSelect: PropTypes.func,
  selectValue: PropTypes.number,
};

export default connect(mapStateToProps)(Panel);
