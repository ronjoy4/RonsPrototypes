import angular from 'angular';
import RuleService from './rule.service';

let ruleModule = angular.module('rule', [])

.service('Rule', RuleService)
  
.name;

export default ruleModule;
