import { makeStyles } from '@material-ui/core/styles';

import { green, red } from '@material-ui/core/colors';

export default makeStyles(theme => ({
  dialogActions: {
    display: 'grid',
    gridTemplateColumns: '1fr 120px 120px',
  },
  saveButton: {
    backgroundColor: green[500],
    color: 'white',
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  deleteButton: {
    backgroundColor: red[500],
    justifySelf: 'start',
    color: 'white',
    '&:hover': {
      backgroundColor: red[700],
    },
  },
}));
