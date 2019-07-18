import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as Constants from '../constants';
import * as Actions from '../redux/actions';
import MainAppDrawer from '../components/MainAppDrawer';

const MainAppContainer = ({appSection, drawerOpen, navChangeSection, navChangeDrawerState}) => {

  return (
    <MainAppDrawer
      selectedSection={appSection}
      drawerOpen={drawerOpen}
      onNavSectionSelected={navChangeSection}
      onDrawerToggled={navChangeDrawerState} />
  );
}

MainAppContainer.propTypes = {
  appSection: PropTypes.oneOf(Object.values(Constants.AppSection)),
  drawerOpen: PropTypes.bool,
  navChangeSection: PropTypes.func,
  navChangeDrawerState: PropTypes.func,
};

const mapStateToProps = (state) => ({
  appSection: state.ui.appSection,
  drawerOpen: state.ui.drawerOpen,
});

const mapDispatchToProps = {
  navChangeSection: Actions.navChangeSection,
  navChangeDrawerState: Actions.navChangeDrawerState,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainAppContainer);
