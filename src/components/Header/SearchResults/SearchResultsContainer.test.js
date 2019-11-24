import React from 'react';
import { render } from '@testing-library/react';

import SearchResultsContainer from './SearchResultsContainer';

test('Renders <SeachResultsContainer/> correctly', () => {
  const { getByTestId } = render(<SearchResultsContainer />);

  const wrapper = getByTestId('SearchContainer');
  expect(wrapper).toMatchSnapshot();
});
