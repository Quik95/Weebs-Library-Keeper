import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  animeMedia: {
    height: '350px',
  },
  cardContent: {
    padding: theme.spacing(1, 2),
  },
  fabFix: { overflow: 'visible', position: 'relative', width: '100%' },
  spinnerFix: { display: 'flex', justifyContent: 'center', alignItems: 'center' }
}));
