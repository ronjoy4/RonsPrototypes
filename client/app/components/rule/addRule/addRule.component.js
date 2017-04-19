import template from './addRule.html';
import controller from './addRule.controller';
import './addRule.scss';

let addRuleComponent = {
  restrict: 'E',
  bindings: {
    rule: '<',
    onUpdate: '&',
    onAdd: '&'
  },
  template,
  controller
};

export default addRuleComponent;
