'use strict';

import angular from 'angular';

// angular modules
import 'angular-ui-router';
import './templates';
import './example/_index';
import './filters';
import './directives';

// create and bootstrap application
const requires = [
  'ui.router',
  'templates',
  'example',
  'app.filters',
  'app.directives',
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', require('./constants'));

angular.module('app').config(require('./on_config'));

angular.module('app').run(require('./on_run'));

angular.bootstrap(document, ['app']);
