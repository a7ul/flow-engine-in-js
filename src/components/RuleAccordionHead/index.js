import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../utils/helper';
import './style.scss';

const getColorClass = (status) => {
  if (status === true) {
    return 'pass';
  } else if (status === false) {
    return 'fail';
  }
  return 'not-done';
};

const RuleAccordionHead = (props) => {
  const statusClass = getColorClass(props.ruleStatus);
  return (
    <div
      className={`rule-accordion-head container ${statusClass} ${!props.expanded ? 'rounded-all-corners' : null}`}
      onClick={() => props.toggle()}
    >
      <div className={`rule-id ${statusClass}`}>{props.ruleId}</div>
      <div className="rule-title">{props.title}</div>
      <div className="rule-step">{props.step}</div>
    </div>
  );
};
RuleAccordionHead.defaultProps = {
  ruleId: null,
  title: null,
  ruleStatus: null,
  step: null,
  toggle: noop,
  expanded: false
};
RuleAccordionHead.propTypes = {
  ruleId: PropTypes.string,
  title: PropTypes.string,
  ruleStatus: PropTypes.oneOf([true, false, null]),
  step: PropTypes.number,
  toggle: PropTypes.func,
  expanded: PropTypes.bool
};
export default RuleAccordionHead;
