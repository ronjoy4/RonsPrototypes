import AddRuleModule from './addRule'
import AddRuleController from './addRule.controller';
import AddRuleComponent from './addRule.component';
import AddRuleTemplate from './addRule.html';

describe('AddRule', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AddRuleModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AddRuleController();
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
      expect(AddRuleTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = AddRuleComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AddRuleTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AddRuleController);
      });
  });
});
