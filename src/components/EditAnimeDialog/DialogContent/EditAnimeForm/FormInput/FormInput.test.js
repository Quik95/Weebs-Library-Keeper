import FormInput from './FormInput';

describe('<FormInput/>', () => {
  const wrapper = shallow(<FormInput title="Dr. Stone" id="title" />);

  it('Renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
