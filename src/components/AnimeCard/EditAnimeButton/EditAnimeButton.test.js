import React from 'react';
import renderer from 'react-test-renderer';

import EditAnimeButton from './EditAnimeButton';

describe('<EditAnimeButton/>', () => {
  it('Renders correctly', () => {
    const tree = renderer.create(<EditAnimeButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
