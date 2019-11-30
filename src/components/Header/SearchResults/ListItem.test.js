import ListItem from './ListItem';

describe('<ListItem/>', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<ListItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
