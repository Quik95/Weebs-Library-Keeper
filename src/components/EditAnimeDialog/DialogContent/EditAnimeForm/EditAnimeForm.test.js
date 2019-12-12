import EditAnimeForm from './EditAnimeForm';

describe('<EditAnimeForm/>', () => {
  const wrapper = shallow(<EditAnimeForm />);

  it('Renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
