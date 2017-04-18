import template from './ruleItem.html';
import controller from './ruleItem.controller';
import './ruleItem.scss';

let ruleItemComponent = {
  restrict: 'E',
  bindings: {
    rule: '<'
  },
  template,
  controller
};

export default ruleItemComponent;
