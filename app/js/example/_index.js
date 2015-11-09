'use strict';

import angular from 'angular';

const exampleModule = angular.module('example', [])
  .controller('ExampleCtrl', require('./example-controller'))
  .service('ExampleService', require('./example-service'));

export default exampleModule;
