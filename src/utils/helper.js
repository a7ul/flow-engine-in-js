export const noop = () => {};

export const prepareRules = (rules) => {
  const preparedRules = {};
  Object.keys(rules).forEach((eachRuleId) => {
    preparedRules[eachRuleId] = { ...rules[eachRuleId], id: eachRuleId, status: null, step: null };
  });
  return preparedRules;
};

export const testRule = (rule, testObject) => {
  const { body } = rule;
  const testfn = eval(body); // eslint-disable-line no-eval
  return Boolean(testfn(testObject));
};

export const ruleExecutor = (rules, testObject) => {
  let ruleId = '1';
  const updatedRules = { ...rules };
  let executionIndex = 0;
  while (ruleId) {
    executionIndex += 1;
    const currentRule = updatedRules[ruleId];
    if (currentRule.step) {
      throw new Error('Circular execution error');
    }
    const status = testRule(currentRule, testObject);
    updatedRules[ruleId] = { ...updatedRules[ruleId], status, step: executionIndex };
    if (status) {
      ruleId = currentRule.true_id;
    } else {
      ruleId = currentRule.false_id;
    }
  }
  return updatedRules;
};

export const formatRulesForDisplay = (rules) => {
  const formattedRules = Object.keys(rules).map((eachRuleId) => ({ ...rules[eachRuleId] }));
  return formattedRules;
};

export const getColorClass = (status) => {
  if (status === true) {
    return 'pass';
  } else if (status === false) {
    return 'fail';
  }
  return 'not-done';
};
