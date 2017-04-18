import RuleListModule from './ruleList'
import RuleListController from './ruleList.controller';
import RuleListComponent from './ruleList.component';
import RuleListTemplate from './ruleList.html';

describe('RuleList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RuleListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RuleListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(RuleListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RuleListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RuleListTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RuleListController);
      });
  });
});
