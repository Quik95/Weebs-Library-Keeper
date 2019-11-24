import React from 'react';
import { render } from '@testing-library/react';

import ListItem from './ListItem';

describe('<ListItem/>', () => {
  const { getByTestId } = render(<ListItem />);

  it('Renders correctly', () => {
    const wrapper = getByTestId('ListItem');

    expect(wrapper).toMatchSnapshot();
  });
});
