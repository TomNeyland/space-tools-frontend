/**
 * Created by skessler on 7/21/15.
 */

'use strict';

import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';

var spaceTools = angular.module('space-tools' ['ui.router']);

spaceTools.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    console.log('otherwise home');

    // HOME STATES AND NESTED VIEWS ========================================
    $stateProvider
        .state('home', {
            url: '/home',
            template: require('./index.html')
        });
}]);

export default spaceTools;