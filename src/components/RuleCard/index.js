import React from 'react';
import PropTypes from 'prop-types';
import Accordion from 'react-super-accordion';

const RuleCard = (props) => (
  <Accordion headText={props.title}>
    <div>
      <div>
        {props.body}
      </div>
      <div>
        {JSON.stringify(props.status)}
      </div>
      <div>
        {props.trueID}
      </div>
      <div>
        {props.falseID}
      </div>
      <div>
        {props.step}
      </div>
    </div>
  </Accordion>
);
RuleCard.defaultProps = {
  title: null,
  status: null,
  body: null,
  trueID: null,
  falseID: null,
  step: null
};
RuleCard.propTypes = {
  title: PropTypes.string,
  status: PropTypes.oneOf([true, false, null]),
  body: PropTypes.string,
  trueID: PropTypes.string,
  falseID: PropTypes.string,
  step: PropTypes.number
};
export default RuleCard;
