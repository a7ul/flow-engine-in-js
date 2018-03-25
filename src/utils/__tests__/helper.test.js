import { prepareRules, testRule, formatRulesForDisplay, ruleExecutor } from '../helper';

describe('Helper utilty', () => {
  describe('Prepare rules: prepares the rules by adding few extra runtime variables', () => {
    it('should add extra attributes and give new rules', () => {
      const rules = {
        1: { title: 'Is value truthy ?', body: '(obj)=>!!obj', true_id: '5', false_id: '5' },
        5: { title: 'Always false ', body: '(obj)=>false', true_id: null, false_id: null }
      };
      const expectedPreparedRules = {
        1: { title: 'Is value truthy ?', body: '(obj)=>!!obj', true_id: '5', false_id: '5', id: '1', status: null, step: null },
        5: { title: 'Always false ', body: '(obj)=>false', true_id: null, false_id: null, id: '5', status: null, step: null }
      };
      expect(prepareRules(rules)).toEqual(expectedPreparedRules);
    });
  });
  describe('testRule: tests the rule against testObject', () => {
    it('should test the rule', () => {
      const rule = {
        body: '(obj)=>!!obj'
      };
      expect(testRule(rule, {})).toBe(true);
      expect(testRule(rule, false)).toBe(false);
    });
  });
  describe('formatRulesForDisplay: formats the object of rules into arrays', () => {
    it('should restruvture the rules into arrays', () => {
      const rules = {
        1: { title: 'Is value truthy ?', body: '(obj)=>!!obj', true_id: '5', false_id: '5' },
        5: { title: 'Always false ', body: '(obj)=>false', true_id: null, false_id: null }
      };
      const expectedFormattedRules = [
        { title: 'Is value truthy ?', body: '(obj)=>!!obj', true_id: '5', false_id: '5' },
        { title: 'Always false ', body: '(obj)=>false', true_id: null, false_id: null }
      ];
      expect(formatRulesForDisplay(rules)).toEqual(expectedFormattedRules);
    });
  });
  describe('ruleExecutor: executes all the rules in the rule json', () => {
    it('should return the rules with their corresponding statuses', () => {
      const rules = {
        1: { title: 'Is value truthy ?', body: '(obj)=>!!obj', true_id: '3', false_id: '5' },
        3: { title: 'Always true ', body: '(obj)=>true', true_id: '5', false_id: '5' },
        5: { title: 'Always false ', body: '(obj)=>false', true_id: null, false_id: null }
      };
      const expectedFormattedRules = {
        1: { title: 'Is value truthy ?', body: '(obj)=>!!obj', true_id: '3', false_id: '5', status: true, step: 1 },
        3: { title: 'Always true ', body: '(obj)=>true', true_id: '5', false_id: '5', status: true, step: 2 },
        5: { title: 'Always false ', body: '(obj)=>false', true_id: null, false_id: null, status: false, step: 3 }
      };
      const testObject = { test: 1 };
      expect(ruleExecutor(rules, testObject)).toEqual(expectedFormattedRules);
    });
    it('should throw if circular', () => {
      const rules = {
        1: { title: 'Is value truthy ?', body: '(obj)=>!!obj', true_id: '3', false_id: '5' },
        3: { title: 'Always true ', body: '(obj)=>true', true_id: '1', false_id: '5' },
        5: { title: 'Always false ', body: '(obj)=>false', true_id: null, false_id: null }
      };
      const testObject = { test: 1 };
      expect(() => ruleExecutor(rules, testObject)).toThrow('Circular execution error');
    });
  });
});

