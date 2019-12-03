import { makeStyles } from '@material-ui/core/styles';

import { green, red } from '@material-ui/core/colors';

export default makeStyles(theme => ({
  saveButton: {
    backgroundColor: green[500],
    color: 'white',
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  deleteButton: {
    backgroundColor: red[500],
    color: 'white',
    '&:hover': {
      backgroundColor: red[700],
    },
  },
}));
