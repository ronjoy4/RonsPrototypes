class RuleListController {

  constructor(RuleService) {
    'ngInject';
    this.ruleService = RuleService;
    //this.tenantFilter = {type: "TenantAssignment"}
  }
  $onInit() {
    this.rulez = this.ruleService.getRules()
    this.selectedRule = this.rulez[0];
    //this.ruleService.getRules().then(response => this.rulez = response);
  }

  selectMe(rule) {
    this.selectedRule = rule;
  }

  updateRule(event) {    
    angular.copy(event.rule, this.selectedRule)
  }

  addRule(event) {
    this.rulez.push(event.rule)
  }

  removeRule(index) {
    this.rulez.splice(index, 1);
    this.ruleService.removeRule(index);
  }

  writeToConsole() {
    this.rulez.forEach((rule) => {
      console.log(JSON.stringify(rule));
    })
  }
}

export default RuleListController;
