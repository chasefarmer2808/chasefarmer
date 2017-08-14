'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('chasefarmerApp.util', [])
  .factory('Util', UtilService)
  .name;
