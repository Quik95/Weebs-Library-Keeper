import React from 'react';
import renderer from 'react-test-renderer';

import WatchingProgress from './WatchingProgress';

describe('<WatchingProgress/>', () => {
  it('Renders correctly', () => {
    const tree = renderer.create(<WatchingProgress />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
