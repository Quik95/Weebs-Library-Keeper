import React from 'react';
import renderer from 'react-test-renderer';

import AnimeCard from './AnimeCard';

describe('<AnimeCard/>', () => {
  it('Renders correctly', () => {
    const tree = renderer.create(<AnimeCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
