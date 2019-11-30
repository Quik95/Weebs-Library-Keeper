import Main from './Main';

describe('<Main/>', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toMatchSnapshot();
  });
});
