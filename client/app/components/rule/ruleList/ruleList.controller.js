class RuleListController {
  
  constructor(RuleService) {
    'ngInject';
    this.ruleService = RuleService;    
    console.log(this.ruleService);
  }
  $onInit() {
    this.rulez = this.ruleService.getRules()
    this.selectedRule = this.rulez[0];
    //this.ruleService.getRules().then(response => this.rulez = response);
  }

  selectMe(rule) {
    console.log('selected ' + JSON.stringify(rule))
    this.selectedRule = rule;
  }

  updateRule(event){
    this.selectedRule = event.rule
  }
}

export default RuleListController;