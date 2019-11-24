import React from 'react';
import { render } from '@testing-library/react';

import Main from './Main';

describe('<Main/>', () => {
  const { getByTestId } = render(<Main />);
  it('Renders correctly', () => {
    const main = getByTestId('main');
    expect(main).toMatchSnapshot();
  });
});
