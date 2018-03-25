import React from 'react';
import renderer from 'react-test-renderer';
import RuleEngineView from '../index';

it('renders correctly', () => {
  const tree = renderer
    .create(<RuleEngineView />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

