import React from 'react';
import renderer from 'react-test-renderer';
import RuleCard from '../index';

it('renders correctly', () => {
  const tree = renderer
    .create(<RuleCard />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

