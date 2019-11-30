import SearchResultsContainer from './SearchResultsContainer';

describe('<SearchResultsContainer/>', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<SearchResultsContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
