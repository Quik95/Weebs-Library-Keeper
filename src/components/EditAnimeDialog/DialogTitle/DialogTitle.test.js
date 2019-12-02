import DialogTitle from './DialogTitle';

describe('', () => {
  const handleCloseMock = jest.fn(() => {});

  const wrapper = shallow(<DialogTitle onClose={handleCloseMock} />);

  it('Renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
