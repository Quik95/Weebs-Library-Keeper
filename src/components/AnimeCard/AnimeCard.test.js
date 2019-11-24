import React from 'react';
import { render } from '@testing-library/react';

import AnimeCard from './AnimeCard';

describe('<AnimeCard/>', () => {
  const { getByTestId } = render(<AnimeCard />);

  it('Renders correctly', () => {
    const wrapper = getByTestId('AnimeCard');
    expect(wrapper).toMatchSnapshot();
  });
});
