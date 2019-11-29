import React from 'react';
import renderer from 'react-test-renderer';

import SearchResultsContainer from './SearchResultsContainer';

describe('<SearchResultsContainer/>', () => {
  it('Renders correctly', () => {
    const tree = renderer.create(<SearchResultsContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
