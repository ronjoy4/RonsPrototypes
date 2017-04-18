import angular from 'angular';
import uiRouter from 'angular-ui-router';
import addRuleComponent from './addRule.component';
import RuleService from '../rule.service'

let addRuleModule = angular.module('addRule', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('addRule', {
      url: '/addRule',
      component: 'addRule'
    });
})

.component('addRule', addRuleComponent)
.service('RuleService', RuleService)

.name;

export default addRuleModule;
