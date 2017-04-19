class RuleService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.rulez = [{
        name: "Tenant Assignment of ledmd110_SG",
        description: "Test Description",
        inventorySourceType: "Virtual Machine",
        inventorySourceAttribute: "Name",
        inclusionIndicator: "Contains",
        inventorySourceAttributeCompareValue: "ledmd110_SG",
        action: "Assign to Tenant",
        actionResult: "Do Something",
        priority: 2
      },
      {
        name: "VMAX to QA",
        inventorySourceType: "VMAX Storage",
        inventorySourceAttribute: "Name",
        inclusionIndicator: "Equals",
        inventorySourceAttributeCompareValue: "baochun",
        action: "Assign to Tenant",
        actionResult: "QA"
      }
    ];
  }

  getRules() {
    return angular.copy(this.rulez);
  }

  addRule(rule) {
    this.rulez.push(rule);
  }

  updateRule(rule) {
    this.rulez[rule] = rule
  }

  removeRule(index) {
    this.rulez.splice(index, 1);
  }

  // getTodos() {
  //   return this.$http.get('/api/todos').then(response => response.data);
  // }

  getInventorySourceTypes() {
    return [{displayName: "Virtual Machine"}, {displayName: "VMAX Storage"}];
  }

  getAttributes() {
    return [{displayName: "Name"}, {displayName: "Folder"}];
  }

  getIndicators() {
    return [{displayName: "Contains"}, {displayName: "Equals"}];
  }

}

export default RuleService;
