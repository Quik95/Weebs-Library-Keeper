import {
  makeStyles
} from '@material-ui/core/styles';

import {
  green,
  red
} from '@material-ui/core/colors';

export default makeStyles(theme => ({
  dialogActions: {
    display: 'grid',
    gridTemplateColumns: '1fr 120px 120px',
    gridGap: theme.spacing(2),
    padding: theme.spacing(1, 3),
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: '1fr',
      gridGap: theme.spacing(1)
    }
  },
  button: {
    marginLeft: '0 !important',
    marginRight: '0 !important'
  },
  saveButton: {
    backgroundColor: green[500],
    color: 'white',
    '&:hover': {
      backgroundColor: green[700],
    },
    [theme.breakpoints.down('xs')]: {
      gridRowStart: 1
    }
  },
  deleteButton: {
    backgroundColor: red[500],
    justifySelf: 'start',
    color: 'white',
    '&:hover': {
      backgroundColor: red[700],
    },
    [theme.breakpoints.down('xs')]: {
      justifySelf: 'auto',
      gridRowStart: 3
    }
  },
}));