import WatchingProgress from './WatchingProgress';

describe('<WatchingProgress/>', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<WatchingProgress />);
    expect(wrapper).toMatchSnapshot();
  });
});
