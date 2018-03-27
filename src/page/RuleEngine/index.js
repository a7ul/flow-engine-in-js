import React from 'react';
import RuleEngineView from '../../components/RuleEngineView';
import rules from '../../assets/flow_rules.json';
import { prepareRules, ruleExecutor } from '../../utils/helper';

const initialState = {
  ruleResults: prepareRules(rules),
  inputText: ''
};

class RuleEngine extends React.Component {
  state = { ...initialState };
  onTextChange = (evt) => {
    this.setState({ inputText: evt.target.value, ruleResults: initialState.ruleResults });
  }
  onExecuteRule = () => {
    const { inputText } = this.state;
    try {
      const testObject = JSON.parse(inputText);
      const nonExecutedRules = initialState.ruleResults;
      this.setState({ ruleResults: ruleExecutor(nonExecutedRules, testObject) });
    } catch (err) {
      console.log(err); // eslint-disable-line no-console
      alert(err.message); // eslint-disable-line no-alert
    }
  }
  render() {
    return (
      <RuleEngineView
        onExecuteRule={this.onExecuteRule}
        ruleResults={this.state.ruleResults}
        inputText={this.state.inputText}
        onTextChange={this.onTextChange}
        onRunRuleClick={this.onExecuteRule}
      />
    );
  }
}
RuleEngine.defaultProps = {};
RuleEngine.propTypes = {};
export default RuleEngine;
