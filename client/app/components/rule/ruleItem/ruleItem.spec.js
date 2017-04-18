import RuleItemModule from './ruleItem'
import RuleItemController from './ruleItem.controller';
import RuleItemComponent from './ruleItem.component';
import RuleItemTemplate from './ruleItem.html';

describe('RuleItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RuleItemModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RuleItemController();
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
      expect(RuleItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RuleItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RuleItemTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RuleItemController);
      });
  });
});
