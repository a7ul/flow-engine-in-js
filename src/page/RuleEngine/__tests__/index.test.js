import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RuleEngine from '../';
import { ruleExecutor } from '../../../utils/helper';

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
      const preparedRules = {
        1: { title: 'Is value truthy ?', body: '(obj)=>!!obj', true_id: '3', false_id: '5', status: null, step: null },
        3: { title: 'Always true ', body: '(obj)=>true', true_id: '5', false_id: '5', status: null, step: null },
        5: { title: 'Always false ', body: '(obj)=>false', true_id: null, false_id: null, status: null, step: null }
      };
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
