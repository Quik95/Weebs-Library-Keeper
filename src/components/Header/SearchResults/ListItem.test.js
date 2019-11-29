import React from 'react';
import renderer from 'react-test-renderer';

import ListItem from './ListItem';

describe('<ListItem/>', () => {
  it('Renders correctly', () => {
    const tree = renderer.create(<ListItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
