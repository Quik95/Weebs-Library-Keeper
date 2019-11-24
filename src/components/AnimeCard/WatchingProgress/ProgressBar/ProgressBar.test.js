import React from 'react';
import { render } from '@testing-library/react';

import ProgressBar from './ProgressBar';

describe('<ProgressBar/>', () => {
  const { getByTestId } = render(<ProgressBar />);

  it('Renders correctly', () => {
    const wrapper = getByTestId('ProgressBar');
    expect(wrapper).toMatchSnapshot();
  });
});
