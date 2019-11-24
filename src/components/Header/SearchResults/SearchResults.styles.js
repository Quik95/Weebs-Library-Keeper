import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  listContainer: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
  },
  listItemText: {
    color: theme.palette.getContrastText(theme.palette.background.paper),
  },
}));
