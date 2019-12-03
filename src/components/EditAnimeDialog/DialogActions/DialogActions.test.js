import DialogActions from './DialogActions';

describe('<DialogActions/>', () => {
  const handleCloseMock = jest.fn(() => {});

  const wrapper = shallow(<DialogActions handleClose={handleCloseMock} />);

  it('Renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
