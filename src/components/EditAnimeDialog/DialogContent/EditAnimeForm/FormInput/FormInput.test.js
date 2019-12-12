import FormInput from './FormInput';

describe('<FormInput/>', () => {
  const wrapper = shallow(<FormInput />);

  it('Renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
