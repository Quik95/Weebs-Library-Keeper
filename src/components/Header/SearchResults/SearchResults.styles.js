import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  listContainer: {
    width: '100%',
    maxWidth: 450,
    maxHeight: '60vh',
    overflowY: 'scroll',
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    borderRadius: 3,
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxHeight: '85vh'
    }
  },
  listItemText: {
    color: theme.palette.getContrastText(theme.palette.background.paper),
  },
  spinnerFix: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  avatarSize: { width: theme.spacing(6), height: theme.spacing(6) }
}));
