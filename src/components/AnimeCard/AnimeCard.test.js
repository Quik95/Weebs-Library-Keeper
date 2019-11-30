import AnimeCard from './AnimeCard';

describe('<AnimeCard/>', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<AnimeCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
