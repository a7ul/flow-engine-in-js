import React from 'react';
import PropTypes from 'prop-types';
import Accordion from 'react-super-accordion';
import RuleAccordionHead from '../RuleAccordionHead';
import './style.scss';

const RuleCard = (props) => (
  <Accordion headComponent={(accodionProps) =>
    <RuleAccordionHead ruleId={props.ruleId} ruleStatus={props.status} step={props.step} title={props.title} {...accodionProps} />
  }
  >
    <div className="rule-card-body">
      <div className="rule-body-title"> Rule Body</div>
      <div className="rule-body-function">{props.body}</div>
      <div className="rule-body-bottom-half">
        <div className="rule-next-id-container">
          <div className="rule-next-id-title">Next rule-id if passed</div>
          <div className="rule-next-id-value">{String(props.trueID)}</div>
        </div>
        <div className="rule-next-id-container">
          <div className="rule-next-id-title">Next rule-id if failed</div>
          <div className="rule-next-id-value">{String(props.falseID)}</div>
        </div>
      </div>
      <div />
    </div>
  </Accordion>
);
RuleCard.defaultProps = {
  ruleId: null,
  title: null,
  status: null,
  body: null,
  trueID: null,
  falseID: null,
  step: null
};
RuleCard.propTypes = {
  ruleId: PropTypes.string,
  title: PropTypes.string,
  status: PropTypes.oneOf([true, false, null]),
  body: PropTypes.string,
  trueID: PropTypes.string,
  falseID: PropTypes.string,
  step: PropTypes.number
};
export default RuleCard;
