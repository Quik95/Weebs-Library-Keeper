import {
  makeStyles
} from '@material-ui/core/styles'

export default makeStyles(theme => ({
  grid: {
    display: 'flex',
    justifyContent: 'center'
  },
  [theme.breakpoints.down('xs')]: {
    formControl: {
      width: '100%'
    }
  }
}))