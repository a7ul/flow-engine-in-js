import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import RuleCard from '../RuleCard';
import { noop, formatRulesForDisplay } from '../../utils/helper';

const RuleEngine = (props) => {
  const formattedRules = formatRulesForDisplay(props.ruleResults);
  return (
    <div className="RuleEngine-Container">
      <button onClick={props.onRunRuleClick}>Lets rule !</button>
      obj = <input type="text" onChange={props.onTextChange} value={props.inputText} />
      {
        formattedRules.map((eachRule) => {
          const { id, title, step, status, body, true_id, false_id } = eachRule; // eslint-disable-line camelcase
          return (
            <RuleCard key={id} title={title} status={status} body={body} trueID={true_id} falseID={false_id} step={step} /> // eslint-disable-line camelcase
          );
        })
      }
    </div>
  );
};
RuleEngine.defaultProps = {
  ruleResults: {},
  onRunRuleClick: noop,
  onTextChange: noop,
  inputText: ''
};
RuleEngine.propTypes = {
  ruleResults: PropTypes.object,
  onRunRuleClick: PropTypes.func,
  onTextChange: PropTypes.func,
  inputText: PropTypes.string
};
export default RuleEngine;
