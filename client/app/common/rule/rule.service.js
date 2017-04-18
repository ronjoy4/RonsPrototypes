class RuleService {
  constructor() {
    'ngInject';
    this.rulez = [{
        name: "Tenant Assignment of ledmd110_SG",
        description: "Test Description",
        inventorySourceType: "VMAX_STORAGE_GROUP",
        inventorySourceAttribute: "NAME",
        inclusionIndicator: "CONTAINS",
        inventorySourceAttributeCompareValue: "ledmd110_SG",
        action: "ASSIGN_TO_TENANT",
        actionResult: "Do Something",
        priority: 2
      },
      {
        name: "VMAX to QA",
        inventorySourceType: "VMAX Storage",
        inventorySourceAttribute: "name",
        inclusionIndicator: "contains",
        inventorySourceAttributeCompareValue: "baochun",
        action: "ASSIGN_TO_TENANT",
        actionResult: "QA"
      }
    ];
  }
  getRules() {
    return this.rulez;
  }
}

export default RuleService;