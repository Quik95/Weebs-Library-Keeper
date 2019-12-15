import React from 'react'

import SearchResultsContainer from './SearchResultsContainer';

describe('<SearchResultsContainer/>', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<SearchResultsContainer open={false} />);
    expect(wrapper).toMatchSnapshot();
  });
});
