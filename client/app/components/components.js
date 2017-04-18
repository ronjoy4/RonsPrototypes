import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import RuleList from './rule/ruleList/ruleList';
import RuleItem from './rule/ruleItem/ruleItem';
import AddRule from './rule/addRule/addRule'

let componentModule = angular.module('app.components', [
  Home,
  RuleList,
  RuleItem,
  AddRule
])

.name;

export default componentModule;
