class AddRuleController {

  constructor(RuleService) {
    'ngInject';

    this.ruleService = RuleService;
  }

  $onInit() {
    this.typeOptions = this.ruleService.getInventorySourceTypes();
    this.attributeOptions = this.ruleService.getAttributes();
    this.indicatorOptions = this.ruleService.getIndicators();

    if (this.rule !== undefined) {
      this.name = "Edit Tenant Assignment Rule"
      this.mode = "edit";
    } 
    else {
      this.name = 'New Tenant Assignment Rule';
      this.mode = "add";
      this.initializeRule()
    }
    this.original = angular.copy(this.rule)
    //this.newRule = { name:"test" }
  }

  $onChanges = function (changes) {
    	if (changes.rule) {
        this.rule = angular.copy(changes.rule.currentValue);
      }
    }
  
  initializeRule() {
     this.rule = {
        name: "",
        description: "",
        inventorySourceType: "",
        inventorySourceAttribute: "",
        inclusionIndicator: "",
        inventorySourceAttributeCompareValue: "",
        action: "Assign to Tenant",
        actionResult: "",
        priority: 2,
        type: 'TenantAssignment'
      }
  }

  reset() {
    this.rule = angular.copy(this.original);
  }

  submit() {
    if (this.mode === 'add') {
      let copyRule = angular.copy(this.rule)
      this.ruleService.addRule(copyRule);
      this.onAdd({
        $event: {
          rule: copyRule
        }
      });
      this.initializeRule()
    } 
    else{
      this.ruleService.updateRule(this.rule);
      this.onUpdate({
        $event: {
          rule: this.rule
        }
      });
    }
  }
}

export default AddRuleController;
