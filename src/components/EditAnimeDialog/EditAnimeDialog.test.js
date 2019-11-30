import EditAnimeDialog from './EditAnimeDialog';

describe('<EditAnimeDialog/>', () => {
  const onCloseMock = jest.fn(() => {});

  const wrapper = shallow(
    <EditAnimeDialog maxWidth="md" open handleClose={onCloseMock} />
  );

  it('Renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
