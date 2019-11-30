import ProgressBar from './ProgressBar';

describe('<ProgressBar/>', () => {
  const wrapper = shallow(
    <ProgressBar
      className="progress--watched"
      tooltipText="Number of episodes you watched"
    />
  );

  it('Renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Correctly applies classes', () => {
    expect(wrapper.find('div').hasClass(/progress/)).toBe(true);
    expect(wrapper.find('div').hasClass(/progress--watched/)).toBe(true);
  });
});
