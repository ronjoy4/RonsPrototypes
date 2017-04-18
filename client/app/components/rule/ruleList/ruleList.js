import angular from 'angular';
import uiRouter from 'angular-ui-router';
import RuleListComponent from './ruleList.component';
import RuleService from '../rule.service'

let ruleListModule = angular.module('ruleList', [
  uiRouter
])
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('ruleList', {
      url: '/',
      component: 'ruleList'
    });
})

.component('ruleList', RuleListComponent)
.service('RuleService', RuleService)
.name;

export default ruleListModule;
