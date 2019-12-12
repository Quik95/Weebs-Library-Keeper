import DialogContent from './DialogContent';

describe('<DialogContent/>', () => {
  const wrapper = shallow(<DialogContent animeId="198cndud198nu892281" />);

  it('Renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
