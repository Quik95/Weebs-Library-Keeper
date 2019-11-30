import EditAnimeButton from './EditAnimeButton';

describe('<EditAnimeButton/>', () => {
  const mockHandleOpenDialog = jest.fn(() => {});

  it('Renders correctly', () => {
    const wrapper = shallow(
      <EditAnimeButton handleOpenDialog={mockHandleOpenDialog} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
