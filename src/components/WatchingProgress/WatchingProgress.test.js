import React from 'react';
import { render } from '@testing-library/react';

import WatchingProgress from './WatchingProgress';

describe('<WatchingProgress/>', () => {
  const { getByTestId } = render(<WatchingProgress />);

  it('Renders correctly', () => {
    const wrapper = getByTestId('WatchingProgress');
    expect(wrapper).toMatchSnapshot();
  });
});
