import Header from './Header';

describe('<Header/>', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
