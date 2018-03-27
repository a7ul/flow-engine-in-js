import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RuleEngine from '../';
import { ruleExecutor, prepareRules } from '../../../utils/helper';
import rules from '../../../assets/flow_rules.json';

jest.mock('../../../assets/flow_rules.json', () => ({
  1: { body: '(obj)=>!!obj', false_id: '5', status: true, step: 1, title: 'Is value truthy ?', true_id: '3' },
  3: { body: '(obj)=>true', false_id: '5', status: true, step: 2, title: 'Always true ', true_id: '5' },
  5: { body: '(obj)=>false', false_id: null, status: false, step: 3, title: 'Always false ', true_id: null } }
));

Enzyme.configure({ adapter: new Adapter() });

describe('RuleEngine', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RuleEngine />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  describe('onTextChange: ', () => {
    it('sets state on change of text', () => {
      const wrapper = Enzyme.shallow(<RuleEngine />);
      wrapper.instance().onTextChange({ target: { value: 'Hello World' } });
      expect(wrapper.instance().state.inputText).toBe('Hello World');
    });
  });
  describe('onExecuteRule: ', () => {
    it('executes the rules on click of the execute button', () => {
      const wrapper = Enzyme.shallow(<RuleEngine />);
      const preparedRules = prepareRules(rules);
      const instance = wrapper.instance();
      instance.state = {
        inputText: '{"test":1}',
        ruleResults: preparedRules
      };
      instance.onExecuteRule();
      expect(instance.state.ruleResults).toEqual(ruleExecutor(preparedRules, { test: 1 }));
    });
  });
});
