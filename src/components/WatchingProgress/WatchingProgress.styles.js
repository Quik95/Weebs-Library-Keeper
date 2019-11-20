import { makeStyles } from '@material-ui/core/styles';
import { amber } from '@material-ui/core/colors';

export default makeStyles(theme => ({
  progressBarContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
    width: '100%',
    height: '5px',
    marginLeft: theme.spacing(2),
    position: 'relative',
  },
  progress: {
    height: '100%',
    position: 'absolute',
  },
  'progress--total': {
    backgroundColor: theme.palette.secondary.light,
    width: '100%',
    zIndex: 1,
  },
  'progress--watched': {
    backgroundColor: theme.palette.secondary.main,
    zIndex: 3,
    width: '20%',
  },
  'progress--aired': {
    backgroundColor: amber[700],
    zIndex: 2,
    width: '60%',
  },
  watchingProgress: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));
