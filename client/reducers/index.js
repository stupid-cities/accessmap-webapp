import { combineReducers } from 'redux';

import { router5Reducer } from 'redux-router5';

import activities from './activities';
import analytics from './analytics';
import auth from './auth';
import browser from './browser';
import geolocation from './geolocation';
import linkoverlay from './link-overlay';
import log from './log';
import map from './map';
import profile from './profile';
import toasts from './toasts';
import routesettings from './route-settings';
import route from './route';
import view from './view';
import waypoints from './waypoints';

/**
 * Routing to be implemented
 */
export default combineReducers({
  activities,
  analytics,
  auth,
  browser,
  geolocation,
  linkoverlay,
  log,
  map,
  profile,
  route,
  router: router5Reducer,
  routesettings,
  toasts,
  view,
  waypoints,
});
