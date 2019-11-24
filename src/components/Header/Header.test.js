import React from 'react';
import { render } from '@testing-library/react';

import Header from './Header';

describe('<Header/>', () => {
  const { getByTestId } = render(<Header />);

  it('Renders correctly', () => {
    const wrapper = getByTestId('Header');
    expect(wrapper).toMatchSnapshot();
  });
});
