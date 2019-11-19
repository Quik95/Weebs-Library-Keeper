import { createMuiTheme } from '@material-ui/core';

// colors
import { blueGrey, lightBlue } from '@material-ui/core/colors';

export default createMuiTheme({
  palette: {
    primary: { main: blueGrey[900] },
    secondary: { main: lightBlue[400] },
  },
});
