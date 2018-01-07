import React from 'react';
import { connect } from 'react-redux';
import switchView from '../../actions/switchMobileView';
import Nav from '../../components/navigation/Navigation';
import './Footer.css';

function mapStateToProps(state) {
  return {
    mobileView: state.mobileView,
  };
}

function Footer(props) {
  const viewSwitcher = (id) => {
    props.dispatch(switchView(id));
  }

  return (
    <footer className="Footer">
      <Nav
        links={props.mobileView}
        switchView={viewSwitcher}/>
    </footer>
  );
}

export default connect(mapStateToProps)(Footer);
