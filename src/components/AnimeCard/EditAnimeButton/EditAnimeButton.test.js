import React from 'react';
import { render } from '@testing-library/react';

import EditAnimeButton from './EditAnimeButton';

describe('<EditAnimeButton/>', () => {
  const { getByTestId } = render(<EditAnimeButton />);

  it('Renders correctly', () => {
    const wrapper = getByTestId('EditAnimeButton');
    expect(wrapper).toMatchSnapshot();
  });
});
