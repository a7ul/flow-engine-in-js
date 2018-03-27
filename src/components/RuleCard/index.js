import React from 'react';
import PropTypes from 'prop-types';
import Accordion from 'react-super-accordion';
import RuleAccordionHead from '../RuleAccordionHead';

const RuleCard = (props) => (
  <Accordion headComponent={(accodionProps) =>
    <RuleAccordionHead ruleId={props.ruleId} ruleStatus={props.status} step={props.step} title={props.title} {...accodionProps} />
  }
  >
    <div>
      <div>
        {props.body}
      </div>
      <div>
        {props.trueID}
      </div>
      <div>
        {props.falseID}
      </div>
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
