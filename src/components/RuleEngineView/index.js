import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import RuleCard from '../RuleCard';
import { noop, formatRulesForDisplay } from '../../utils/helper';

const RuleEngine = (props) => {
  const formattedRules = formatRulesForDisplay(props.ruleResults);
  return (
    <div className="rule-engine container">
      <div className="input-container">
        obj =
        <input className="input-text" type="text" onChange={props.onTextChange} value={props.inputText} />
      </div>
      <button className="run-button" onClick={props.onRunRuleClick}>Lets rule !</button>
      {
        formattedRules.map((eachRule) => {
          const { id, title, step, status, body, true_id, false_id } = eachRule; // eslint-disable-line camelcase
          return (
            <RuleCard
              key={id}
              ruleId={id}
              title={title}
              status={status}
              body={body}
              trueID={true_id}// eslint-disable-line camelcase
              falseID={false_id}// eslint-disable-line camelcase
              step={step}
            />
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
