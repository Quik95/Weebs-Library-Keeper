import EditAnimeButton from './EditAnimeButton';

describe('<EditAnimeButton/>', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<EditAnimeButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
