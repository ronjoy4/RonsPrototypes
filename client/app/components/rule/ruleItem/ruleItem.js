import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ruleItemComponent from './ruleItem.component';

let ruleItemModule = angular.module('ruleItem', [
  uiRouter
])

.component('ruleItem', ruleItemComponent)

.name;

export default ruleItemModule;
