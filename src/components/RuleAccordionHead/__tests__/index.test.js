import React from 'react';
import renderer from 'react-test-renderer';
import RuleAccordionHead from '../index';

it('renders correctly', () => {
  const tree = renderer
    .create(<RuleAccordionHead />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

